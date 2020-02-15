(ns transit-decoder.core
  (:require [reagent.core :as r]
            ["prismjs/components/prism-core" :refer [highlight languages]]
            ["prismjs/components/prism-clojure"]
            [clojure.pprint :refer [pprint]]
            [herb.core :refer [<class]]
            [transit-decoder.css-classes :as css]
            [cognitect.transit :as transit]))

(enable-console-print!)

(defonce app-state (r/atom {:transit ""
                            :clojure ""}))

(defonce transit-str* (r/cursor app-state [:transit]))
(defonce clojure-str* (r/cursor app-state [:clojure]))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn convert []
  (let [converted-data (transit/read (transit/reader :json) @transit-str*)
        pretty-converted-data (with-out-str (pprint converted-data))
        clojure-lang (.-clojure languages)]
    (reset! clojure-str* (highlight (str pretty-converted-data) clojure-lang))))

(defn app []
  [:<>
   [:h3 "Transit"]
   [:textarea {:value @transit-str*
               :class (<class css/transit-input)
               :on-change #(reset! transit-str* (.. % -target -value))}]
   [:h3 "Clojure"]
   [:pre {:class (<class css/clojure-output)}
    [:code {:dangerouslySetInnerHTML {:__html @clojure-str*}}]]
   [:button {:on-click convert} "Convert Transit -> Clojure"]])

(r/render [app] (.getElementById js/document "app"))
