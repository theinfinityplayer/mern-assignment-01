let credits=5000;

if (credits >= 7500){
    console.log("Badge: Tera Leader");
} else
if (credits >= 6000 && credits < 7500){
   console.log("Badge: Gega Leader")
} else
if (credits >= 4500 && credits < 6000){
   console.log("Badge: Mega Leader")
} else
if (credits < 4500){
   console.log("Badge: Rising Star")
};