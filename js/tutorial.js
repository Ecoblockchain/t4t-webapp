// 2011 Copyright Citizen Cyberscience Centre
//
// This file is part of t4t-webapp.
// 
// t4t-webapp is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// t4t-webapp is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with t4t-webapp.  If not, see <http://www.gnu.org/licenses/>.

var pop = Popcorn("#video");

// Enable preload
pop.preload("auto");

function addPopOvers() {
        $("#info").popover({
                html: true,
                trigger: "manual"
                });

        $("#boinc").popover({
                html: true,
                trigger: "manual"
                });

        $("#logs").popover({
                html: true,
                trigger: "manual"
                });

        $("#figures").popover({
                html: true,
                trigger: "manual",
                placement: "left",
                offset: -90
                });
}

function stopTutorial(){
        $("#left-sidebar").animate({opacity:1},100);
        $("#main-content").animate({opacity:1},100);
        $("#info").animate({opacity:1},100);
        $("#boinc").animate({opacity:1},100);
        $("#logs").animate({opacity:1},100);
        $("#help-button").show();
        
        $("#tutorial").slideUp();
        $("#info").popover("hide");
        $("#boinc").popover("hide");
        $("#logs").popover("hide");
        $("#figures").popover("hide");
        
        pop.pause();
}

function startTutorial() {
        $("#left-sidebar").animate({opacity:0},1);
        $("#main-content").animate({opacity:0},1);
        $("#help-button").hide();

        
        addPopOvers();

        $("#tutorial").show();
        var gallery = Galleria.get(0);

        // First, show the two parts: left side bar and content
        pop.code({
            start: 12,
            end: 14,
            onStart: function( options ){
                $("#left-sidebar").animate({opacity: 1}, 500);
            },
            onEnd: function (options) {
                $("#left-sidebar").animate({opacity: 0}, 500);
            }
                        });

        pop.code({
            start: 14,
            end: 15,
            onStart: function( options ){
                $("#main-content").animate({opacity: 1}, 500);
            },
            onEnd: function (options) {
                $("#main-content").animate({opacity: 0}, 500);
                $("#left-sidebar").animate({opacity: 1}, 500);
            }
                        });

        // First the simulations box
        pop.code({
            start: 17,
            end: 24,
            onStart: function( options ){
                $("#left-sidebar").animate({opacity:1},1);
                $("#info").popover('show');
                $("#info").animate({opacity: 1.0}, 500);
                $("#boinc").animate({opacity: 0.3}, 500);
                $("#logs").animate({opacity: 0.3}, 500);
            },
            onEnd: function (options) {
                $("#info").popover('hide');
                $("#boinc").animate({opacity: 1}, 500);
                $("#logs").animate({opacity: 1}, 500);
            }
                        });

        // Second the BOINC div
        pop.code({
            start: 27,
            end: 33,
            onStart: function( options ){
                $("#left-sidebar").animate({opacity:1},1);
                $("#boinc").popover('show');
                $("#info").animate({opacity: 0.3}, 500);
                $("#boinc").animate({opacity: 1.0}, 500);
                $("#logs").animate({opacity: 0.3}, 500);

            },
            onEnd: function (options) {
                $("#boinc").popover('hide');
                $("#info").animate({opacity: 1}, 500);
                $("#logs").animate({opacity: 1}, 500);

            }
                        });

        // Third Logs div
        pop.code({
            start: 34,
            end: 42,
            onStart: function( options ){
                $("#left-sidebar").animate({opacity:1},1);
                $("#logs").popover('show');
                $("#info").animate({opacity: 0.3}, 500);
                $("#boinc").animate({opacity: 0.3}, 500);
                $("#logs").animate({opacity: 1}, 500);

            },
            onEnd: function (options) {
                $("#logs").popover('hide');
                $("#info").animate({opacity: 1}, 500);
                $("#boinc").animate({opacity: 1}, 500);

            }
                        });

        pop.code({
            start: 43,
            end: 44,
            onStart: function( options ){
                $("#main-content").animate({opacity: 1}, 500);
            },
            onEnd: function (options) {
                $("#left-sidebar").animate({opacity: 0}, 500);
            }
                        });

        pop.code({
            start: 45,
            end: 53,
            onStart: function( options ){
                $("#figures").popover('show');
            },
            onEnd: function (options) {
                $("#figures").popover('hide');
            }
                        });

        pop.code({
            start: 58,
            end: 60,
            onStart: function( options ){
                gallery.next();
            },
            onEnd: function (options) {
                gallery.prev();
            }
                        });

         pop.listen("ended", function() {
                $("#tutorial").slideUp();
                $("#left-sidebar").animate({opacity:1},100);
                $("#main-content").animate({opacity:1},100);
                $("#info").popover({trigger: 'hover'});
                $("#boinc").popover({trigger: 'hover'});
                $("#logs").popover({trigger: 'hover'});
                $("#help-button").show();
         });


        pop.controls(true);
        pop.play();

        $().popover({trigger: 'hover'});

}
