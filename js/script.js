$(function(){
        $('.rangeslider,#billing-option').on('change',function(){
            var output= checkSlider();
            var price= output[0];
            var pageview = output[1];
            var billing = checkBilling()
            updatePrice(price,billing,pageview);
            updateDiscount(billing);
        })
});
function checkSlider(){
        var value = $('.rangeslider').val();
        var price = 16;
        var pageviews = 100;
        if(value == 1){
            price = 8;
            pageviews = 10;
        }else if(value == 2){
            price = 12;
            pageviews = 50;
        }else if(value == 3){
            price = 16;
            pageviews = 100;
        }else if(value == 4){
            price = 24;
            pageviews = 500;
        }else if(value == 5){
            price = 36;
            pageviews = 1;
        }else{
            price = NaN;
            pageviews = NaN;
        }
        return [price,pageviews]
};
function updatePrice(price,billing,pageview){
    
    if(billing == 'year'){
        price = price -(price * 0.25);
        $('.price').html('<h3>$'+ price + '.00</h3><span>/ '+ billing +'</span>');
    }else{
        $('.price').html('<h3>$'+ price + '.00</h3><span>/ '+ billing +'</span>');
    }
    if(pageview == 1){
        $('.pageview').html('<span>'+ pageview +'M PAGEVIEWS</span>');
    }else{
        $('.pageview').html('<span>'+ pageview +'K PAGEVIEWS</span>');
    }
}

function checkBilling(){
    var annualBilling = ($('#billing-option').prop("checked")===true);
    return annualBilling ? 'year' : 'month'
}
function updateDiscount(billing){
    if(billing == "year"){
        $('.discount').show();
    }if(billing == "month"){
        $('.discount').hide();
    }
   
}