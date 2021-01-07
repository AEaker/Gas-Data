
function ZipFunction(){
  Zipcode = document.getElementById("Zip").value;
  $.post("/zipcode", {
    zipcode : Zipcode,
    },  function(err, req, resp) {
      console.log(resp.responseText);
    }
  );
  return Zipcode
}
function YearFunction(){
  Year_Data= document.getElementById("Year").value;
  return Year_Data
 }

