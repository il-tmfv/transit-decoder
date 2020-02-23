(ns ^:figwheel-hooks transit-decoder.core
  (:require [reagent.core :as r]
            ["prismjs/components/prism-core" :refer [highlight languages]]
            ["prismjs/components/prism-clojure"]
            [clojure.pprint :refer [pprint]]
            [herb.core :refer [<class]]
            [transit-decoder.css-classes :as css]
            [cognitect.transit :as transit]))

(defonce app-state (r/atom {:transit ""
                            :clojure ""}))

(defonce transit-str* (r/cursor app-state [:transit]))
(defonce clojure-str* (r/cursor app-state [:clojure]))

(defn convert []
  (let [converted-data (transit/read (transit/reader :json) @transit-str*)
        pretty-converted-data (with-out-str (pprint converted-data))
        clojure-lang (.-clojure languages)]
    (reset! clojure-str* (highlight (str pretty-converted-data) clojure-lang))))

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
