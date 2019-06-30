$(document).ready(function() {
  $(function() {
    $("#input_cin").on("input", function() {
      $("#error_input_cin").empty();
    });

    $("#check-form").on("submit", function(e) {
      e.preventDefault();

      if ($("#input_cin").val() != "") {
        $.ajax({
          type: "post",
          url: "script.php",
          data: $("form").serialize(),
          dataType: "json",
          success: function(response) {
            $("#table > table").remove();
            if (response != false) {
              $("#table").append(
                '<table class="table">' +
                  "<thead>" +
                  "<tr>" +
                  '<th scope="col">Nom</th>' +
                  '<th scope="col">Prénom</th>' +
                  '<th scope="col">Ville</th>' +
                  '<th scope="col">Date de naissance</th>' +
                  "</tr>" +
                  "</thead>" +
                  "<tbody>" +
                  "<tr>" +
                  "<td>" +
                  response.nom +
                  "</td>" +
                  "<td>" +
                  response.prenom +
                  "</td>" +
                  "<td>" +
                  response.ville +
                  "</td>" +
                  "<td>" +
                  response.date_naissance +
                  "</td>" +
                  "</tr>" +
                  "</tbody>" +
                  "</table>"
              );
            } else {
              $("#error_input_cin").text("N° CIN introuvable");
            }
          }
        });
      } else {
        if ($("#input_cin").val() == "") {
          $("#error_input_cin").text("N° CIN est requis!");
        }
      }
    });
  });
});
