// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// share
var myLink = encodeURI("https://ronan696.com");
var fb = "https://www.facebook.com/sharer.php?u=" + myLink;
var gplus = "https://plus.google.com/share?url="+myLink;

function getRating()
{
  swal({
  title: 'Do you like my page?',
  html:
    'If you liked my page, would you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!<input type="text" id="rater" class="swal2-input" placeholder="Your Name (Optional)" name="name"/></br>' +
    '<span class="rating"> <input type="radio" class="rating-input" id="rating-input-1-5" value="1" name="rating-input-1"><label for="rating-input-1-5" class="rating-star"></label> <input type="radio" class="rating-input" id="rating-input-1-4" value="2" name="rating-input-1"> <label for="rating-input-1-4" class="rating-star"></label> <input type="radio" class="rating-input" id="rating-input-1-3" value="3" name="rating-input-1"> <label for="rating-input-1-3" class="rating-star"></label> <input type="radio" class="rating-input" id="rating-input-1-2" value="4" name="rating-input-1"> <label for="rating-input-1-2" class="rating-star"></label> <input type="radio" class="rating-input" id="rating-input-1-1" value="5" name="rating-input-1"> <label for="rating-input-1-1" class="rating-star"></label> </span>',
  showCloseButton: true,
  showCancelButton: true,
  allowOutsideClick : false,
  confirmButtonText: 'Rate Me! <i class="fa fa-smile-o" aria-hidden="true"></i>',
  cancelButtonText:
  'No, Thanks <i class="fa fa-frown-o" aria-hidden="true"></i>',
    customClass : "popUp"
}).then(function()
       {
    console.log($("#rater").val());
    console.log($("input[name='rating-input-1']:checked").val());
  });
}

function share()
{
  swal({
    title : "Share",
    html : 
    '<div class="wrapper squares"><a href="#" class="facebook square"><i class="fa fa-facebook"></i></a><a href="#" class="twitter square"><i class="fa fa-twitter"></i></a><a href="#" class="linkedin square"><i class="fa fa-linkedin"></i></a><a href="#" class="google-plus square"><i class="fa fa-google-plus"></i></a><a href="https://api.whatsapp.com/send?text=I\'m%20inquiring%20about%20the%20apartment%20listing" target="blank" class="whatsapp square"><i class="fa fa-whatsapp"></i></a><a href="mailto:?subject=Ronan\'s Resume" class="email square"><i class="fa fa-envelope"></i></a><a href="javascript:copyLink();" class="link square"><i class="fa fa-link"></i></a></div><div id="status"></div>',
    customClass : "popUp"
  });
}

function copyLink()
 {
   var $temp = $("<input>");
  $("body").append($temp);
  $temp.val("Text to be copied").select();
  document.execCommand("copy");
  $temp.remove();
  var $status = $("#status").html("Link Copied").css("display","block");
   setTimeout(function(){
     $status.css("display","none");
                  }, 1000);
};
