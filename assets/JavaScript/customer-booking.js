// Customer data of booking
customer_booking=[
    {
        "name":'karan',
        "phone_number":7719475979,
        "gmail":'karan@gmail.com',
        'package':'Special',
        "Price":10000,
        "customer_city":"Muktsar",
        "event_city":'Muktsar'
    },
    {
        "name":'jatil',
        "phone_number":2345676439,
        "gmail":'jatil@gmail.com',
        'package':'Premium',
        "Price":20000,
        "customer_city":"Mansa",
        "event_city":'Jalandhar'
    },
]

function get_info(){
    const cust_name=document.querySelector("#cust_name").value;
    const cust_mobile=document.querySelector("#cust_mobile").value;
    const cust_mail=document.querySelector("#cust_mail").value;
    const cust_city=document.querySelector("#city").value;
}