(ns ^:figwheel-hooks transit-decoder.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [transit-decoder.events]
            [transit-decoder.db :as db]
            [transit-decoder.css-classes :as css]
            [herb.core :refer [<class]]))

(defn ClipboardButton []
  (let [clipboard-api-supported? (exists? js/navigator.clipboard)]
    (when clipboard-api-supported?
      [:button
       {:class (<class css/convert-button)
        :on-click #(rf/dispatch [:click-on-convert-from-clipboard])}
       "Paste and convert"])))

(defn ConvertButton []
  [:button {:on-click #(rf/dispatch [:click-on-convert])
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
   [:textarea {:value @db/transit-str*
               :class (<class css/transit-input)
               :on-change #(rf/dispatch [:change-transit-str (.. % -target -value)])}]
   [ActionButtons]
   [:h3 "Clojure"]
   [:pre {:class (<class css/clojure-output)}
    [:code {:dangerouslySetInnerHTML {:__html @db/clojure-str*}}]]])

(defn mount []
  (r/render [app] (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount))

(defonce start-up (do
                    (rf/dispatch-sync [:initialize])
                    (mount)
                    true))
