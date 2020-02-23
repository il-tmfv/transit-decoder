(ns ^:figwheel-hooks transit-decoder.core
  (:require [reagent.core :as r]
            [transit-decoder.text-processing :refer [prettify-and-highlight-clojure-transit]]
            [herb.core :refer [<class]]
            [transit-decoder.css-classes :as css]))

(defonce transit-str* (r/atom ""))
(defonce clojure-str* (r/atom ""))

(defn convert []
  (try
    (reset! clojure-str* (prettify-and-highlight-clojure-transit @transit-str*))
    (catch js/SyntaxError e
      (js/alert (str "Please check your input: " (.-message e))))
    (catch :default e
      (js/alert e))))

(defn paste-and-convert []
  (-> (.readText js/navigator.clipboard)
      (.then (fn [text]
               (reset! transit-str* text)
               (convert)))
      (.catch (fn [error]
                (js/alert error)))))

(defn ClipboardButton []
  (let [clipboard-api-supported? (exists? js/navigator.clipboard)]
    (when clipboard-api-supported?
      [:button
       {:class (<class css/convert-button)
        :on-click paste-and-convert}
       "Paste and convert"])))

(defn ConvertButton []
  [:button {:on-click convert
            :class (<class css/convert-button)}
   "Convert Transit -> Clojure"])

(defn ActionButtons []
  [:div
   [ConvertButton]
   " "
   [ClipboardButton]])

(defn app []
  [:<>
   [:h3 "Transit"]
   [:textarea {:value @transit-str*
               :class (<class css/transit-input)
               :on-change #(reset! transit-str* (.. % -target -value))}]
   [ActionButtons]
   [:h3 "Clojure"]
   [:pre {:class (<class css/clojure-output)}
    [:code {:dangerouslySetInnerHTML {:__html @clojure-str*}}]]])

(defn mount []
  (r/render [app] (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount))

(defonce start-up (do (mount)
                      true))
