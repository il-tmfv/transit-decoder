(ns transit-decoder.core
    (:require [reagent.core :as r]
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
        pretty-converted-data (with-out-str (cljs.pprint/pprint converted-data))]
    (reset! clojure-str* (str pretty-converted-data))))
  
(defn app []
  [:div
    [:h3 "Transit"]
    [:textarea {:value @transit-str* 
                :on-change #(reset! transit-str* (.. % -target -value))}]
    [:h3 "Clojure"]
    [:textarea {:value @clojure-str*
                :on-click #(.preventDeafult %)}]
    [:button {:on-click convert} "Convert Transit -> Clojure"]])

(r/render [app] (.getElementById js/document "app"))
