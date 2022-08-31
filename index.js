// FOR GIVING ANIMATION TO IMAGES
$(function(){
    $(".img-trend1").on({
     mouseenter: function(){
      $(this).attr('src','images/11498812091866-Huetrap-Men-Green-Solid-Regular-Fit-Round-Neck-T-shirt-6361498812091735-4-4.webp');
    },
    mouseleave: function(){
      $(this).attr('src','images/11498812091917-Huetrap-Men-Green-Solid-Regular-Fit-Round-Neck-T-shirt-6361498812091735-1-4.webp');
    }
    });
    
  });

  $(function(){
    $(".img-trend2").on({
     mouseenter: function(){
      $(this).attr('src','images/46513e59-8a09-4175-a449-d42649b230d11625141022996-4-2.jpg');
    },
    mouseleave: function(){
      $(this).attr('src','images/a4e0df3f-e3d7-4718-a398-e9ba2b3991241625141022960-1-2.webp');
    }
    });
    
  });

  $(function(){
    $(".img-trend3").on({
     mouseenter: function(){
      $(this).attr('src','images/0af6dca7-af41-4d27-a531-34279b1ffdba1583220450892-WROGN-Men-Shirts-2101583220448547-4.jpg');
    },
    mouseleave: function(){
      $(this).attr('src','images/309a77f1-5362-49ba-b1b2-155a461456701583220451104-WROGN-Men-Shirts-2101583220448547-1.webp');
    }
    });
    
  });

//   READ MORE-LESS BUTTON

  $('.moreless-button').click(function(e) {
    e.preventDefault();
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == ">Read more") {
      $(this).text(">Read less")
    } else {
      $(this).text(">Read more")
    }
  });

//   HOVER FUNCTION FOR MIDDLE NAVBAR

  $(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
}); 