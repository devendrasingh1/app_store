(function($) {
	"use strict";
	//Accordion js
	$(".panel_heading a").on("click", function(e){
		e.preventDefault();
	});
	$(".active_data").show();
    $('.panel_heading').click(function (e){
		$(".panel_heading").removeClass("active_head");
		if($(this).next('.panel_content').css('display') != 'block'){
			$('.active_data').removeClass('active_data').slideUp(500);
			$(this).next('.panel_content').addClass('active_data').slideDown(500);
			$(this).addClass("active_head");
		} else {
			$('.active_data').removeClass('active_data').slideUp(500);
		}
	});
	//tabs Menu
	$('.tab_menu .tab_link').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.tab_menu .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//dropdown menu js
	$('.menu_toggle').on('click', function(){
		$(".dropdown_navs").toggleClass("menu_open");
		$(".dropdown_navs").slideToggle(300);
	});
	//Responsive Menu in mobile
	$('.app_nav_toggle').on('click', function(){
		$(".app_navigation").slideToggle(300);
	});
	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".app_navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".app_navigation > ul > li> ul > li > ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fas fa-chevron-down'></i></span>");
		$(".app_navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
		});
	}
	else {
		
	}
	//Datepicker
	if($(".calendar_dv").length > 0){
		$( ".calendar_dv" ).datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		});
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
    //dropdown menu
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			mode:"fade",
			items:1,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false,
		});
	}
	//home slider
	if ($(".app_slider").length > 0) {
		$(".app_slider").owlCarousel({
			mode:"fade",
			items:3,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false,
			responsive:{
				 0:{
		            items:1
		        },
		        992:{
		            items:2
		        },
		        1100:{
		            items:3
		        }
		    }
		});
	}
	
	//progressbar js
	$(window).on('load', function() {
		$(".progress_panel").each(function() {
			var slide = $(this).children(".prog_slide");
			var slide_val = slide.attr("slide-value");
		  //slide amimate
		 slide.animate({
		    'width': slide_val+'%',
		    easing: 'ease'
		  }, 2000);
		});
	});
	//Jqeury counter
	$('.number_counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'linear',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	//upload
	$('#file_upload').change(function() {
	  var i = $(this).prev('label').clone();
	  var file = $('#file_upload')[0].files[0].name;
	  $(this).next('.img_path').html(file);
	});

  //file upload drag $ drop code
  $('.upload_input').change(function() {
    //var i = $(this).parents('.upload_label').clone();
    var file = $(this)[0].files[0].name;
    $(this).next(".upload_text").next('.img_path').html(file);
  });
  //sidebar show in mobile
	$('.sidebar_toggle').on('click', function(){
		$(".dashboard_sidbar").toggleClass("side_open");
		$(".dashboard_sidbar").slideToggle(300);
	});
	//add dymanic field on click
	var l = 1;
	$('.add_more_btn').on('click', function(){
		l++;
		var html = '<div class="row more_field_row" id="row'+l+'">\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes app_input">\
                    <h4>Title</h4>\
                    <input type="text" name="user_id" placeholder="Enter Title">\
                </div>\
            </div>\
        </div>\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes">\
                    <h4>Icon</h4>\
                    <div class="input_group">\
                        <div class="upload_file_dv">\
                            <label class="upload_label">\
                                <input type="file" name="" class="upload_input">\
                                <span class="upload_text"><i class="fas fa-cloud-upload-alt"></i>Upload Icon</span>\
                                <span class="img_path"></span>\
                            </label>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="col-xl-4 col-md-6">\
            <div class="form_group">\
                <div class="app_boxes app_input">\
                    <h4>Price</h4>\
                    <input type="text" name="user_id" placeholder="Enter Price">\
                </div>\
            </div>\
        </div>\
        <button type="button" value="Remove" class="remove_btn" id="'+l+'">\
        <i class="fas fa-times"></i>\
        </button>\
		</div>';
		$('.add_more_form').append(html);
		 //file upload drag $ drop code
		  $('.upload_input').change(function() {
		    //var i = $(this).parents('.upload_label').clone();
		    var file = $(this)[0].files[0].name;
		    $(this).next(".upload_text").next('.img_path').html(file);
		  });
	});
	//remove field
	$(document).on('click', '.remove_btn', function(){
		//var button_id = $(this).attr("id");
		var remove_prnt = $(this).parents(".more_field_row");
		$(remove_prnt).remove();
	});

	//all app detail
	$(document).on('click', '.add_in_app_btn', function(){
		$(this).parents(".all_app_row").next(".purchase_box").slideToggle(300);
	});
})(jQuery);