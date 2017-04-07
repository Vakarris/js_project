$(function(){
    $("#submitParameters").click(function(){
      var topText = $("#top").val();
      var bottomText = $("#bottomText").val();
      var fontStyle = $("#font").val();
      var fontSize = $("#fontSize").val();
      var memePicture = $("#meme").val();
      var memeLink = {
        url: "https://ronreiter-meme-generator.p.mashape.com/meme?bottom=" + bottomText + "&font=" + fontStyle + "&font_size=" + fontSize + "&meme=" + memePicture + "&top=" + topText,
        context: document.body,
        dataType: "jsonp",
      }

      $.ajax(memeLink).done(function(data){
        console.log(data);
      })
    })
})

// https://ronreiter-meme-generator.p.mashape.com/meme?bottom=Bottom+text&font=Impact&font_size=50&meme=Condescending+Wonka&top=Top+text
