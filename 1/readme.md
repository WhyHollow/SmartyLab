Задача 1

const airports = [

"BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",

"JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD",

]

routes = [

["DSM", "ORD",

["ORD", "BGI"],

["BGI", "LGA"],

["SIN", "CDG"],

["CDG", "SIN"],

["CDG", "BUD"],

["DEL", "DOH"],

["DEL", "CDG"],

["TLV", "DEL"],

["EWR", "HND"],

["HND", "ICN"],

["HND", "JFK"],

["ICN", "JFK"]

["JFK", "LGA"],

["EYW", "LHR"],

["LHR", "SFO"],

["SFO", "SAN"],

["SFO", "DSM"],

["SAN", "EYW"],

]

startingAirport = "LGA";

У вас есть список аэропортов США airports и список возможных перелетов routes со списком суб массивов, которые обозначают что вы можете перелететь из одного аэропорта только в определённый другой. Например ["LHR", "SFO"] означает что вы можете перелететь из аэропорта LHR по маршруту в аэропорт SFO. Стартовый аэропорт LGA позволяет отправиться в любой аэропорт из этого списка.

УСЛОВИЯ

Вам надо перебраться из стартового аэропорта LGA в любой указанный аэропорт (возьмём для примера SAN). Вам надо добраться до этого аэропорта максимально коротким маршрутом с пересадками в промежуточных аэропортах. Напишите функцию чтобы узнать сколько вам пересадок понадобится чтобы добраться из LGA в любой из указанных аэропортов
