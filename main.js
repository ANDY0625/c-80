name_array=[];
function submit(){
var display_array=[];
for(var i=1;i<=4;i++){
    var s_name=document.getElementById("name_of_the_student_"+i).value;
console.log(s_name);
name_array.push(s_name);

}
var length_array=name_array.length; console.log(length_array);
for(var j=0;j<length_array;j++)
{
    display_array.push("<h4> name-"+name_array[j]+"</h4>");
    console.log(display_array);

}
document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    var display_sort=[];
    var length_array=name_array.length; console.log(length_array);
    for(var j=0;j<length_array;j++)
{
    display_sort.push("<h4> name-"+name_array[j]+"</h4>");
    console.log(display_sort);


}
document.getElementById("display_name_with_commas").innerHTML=display_sort;
var remove_commas=display_sort.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}