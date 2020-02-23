(ns transit-decoder.events
  (:require [re-frame.core :as rf]
            [transit-decoder.text-processing :refer [prettify-and-highlight-clojure-transit]]))

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:transit-str ""
    :closjure-str ""}))

(rf/reg-event-db
 :change-transit-str
 (fn [db [_ new-value]]
   (assoc db :transit-str new-value)))

(rf/reg-event-db
 :change-clojure-str
 (fn [db [_ new-value]]
   (assoc db :clojure-str new-value)))

(rf/reg-event-fx
 :show-error
 (fn [_ [_ message]]
   {:show-alert-window message}))

(rf/reg-event-fx
 :click-on-convert
 (fn [{:keys [db]} _]
   {:dispatch [:convert (:transit-str db)]}))

(rf/reg-event-fx
 :convert
 (fn [_ [_ input]]
   {:format-and-highlight-clojure input}))

(rf/reg-event-fx
 :click-on-convert-from-clipboard
 (fn [_ _]
   {:get-text-from-clipboard {:on-success [[:change-transit-str] [:convert]]
                              :on-error [:show-error]}}))

(rf/reg-fx
 :show-alert-window
 (fn [message]
   (js/alert message)))

(rf/reg-fx
 :format-and-highlight-clojure
 (fn [input]
   (try
     (rf/dispatch [:change-clojure-str (prettify-and-highlight-clojure-transit input)])
     (catch js/SyntaxError e
       (rf/dispatch [:show-error (str "Please check your input: " (.-message e))]))
     (catch :default e
       (rf/dispatch [:show-error e])))))

(rf/reg-fx
 :get-text-from-clipboard
 (fn [{:keys [on-success on-error]}]
   (-> (.readText js/navigator.clipboard)
       (.then (fn [text]
                (doseq [event on-success]
                  (rf/dispatch (conj event text)))))
       (.catch (fn [error]
                 (rf/dispatch (conj on-error error)))))))
