// text show only 100 charecter and then ...
EX: since the 1500...

<small>REQUESTER’S COMMENTS</small>
<p>{{ docketHistory.requesterComments | limitTo: 100 }}{{docketHistory.requesterComments.length > 100 ? '...' : ''}}</p>

**********************************************************************

html file
--------
<a href="#" ng-click="ShowHideNotesData($event)" class="morelink">more&gt;&gt;</a>

js file
-------
var docketCenter = {
    WebAPIURL: {
        GetFilter: 'GetFilter',
        BookmarkItemForUser: 'BookmarkItemForUser',
    },
    variables: {
        showChar: 150, // How many characters are shown by default
        ellipsestext: "...",
        moretext: "more>>",
        lesstext: "Close"
    }
}
load
controllers.DocketCenterCtrl = function ($scope, $timeout, $anchorScroll, $window, $element, $sce, $compile) {
    model = $scope;

    //Global variables
  
    $scope.DocketItemList = [];
    $scope.DocketItem = "";

//Check for notes max length
    $scope.CheckNotesLength = function () {
        angular.forEach($scope.DocketItemList, function (value, key) {
            var content = value.docketItemNote;
            if (content.length > docketCenter.variables.showChar) {

                var c = content.substr(0, docketCenter.variables.showChar);
                var h = content.substr(docketCenter.variables.showChar, content.length - docketCenter.variables.showChar);

                var html = c + "<span class='moreellipses'>" + docketCenter.variables.ellipsestext + "&nbsp;</span><span class='morecontent'><span>" + h + "</span>&nbsp;&nbsp;<a href='#'  ng-click='ShowHideNotesData($event)' class='morelink'>" + docketCenter.variables.moretext + "</a></span>";
                $scope.DocketItemList[key].docketItemNote = html;
            }
        });
    }

    $scope.trustAsHtml = function (html) {
        return $sce.trustAsHtml(html);
    }

    //Show hide Notes data
    $scope.ShowHideNotesData = function (event) {
        var currentObject = $(event.target);
        if (currentObject.hasClass("less")) {
            currentObject.removeClass("less");
            currentObject.html(docketCenter.variables.moretext);
        } else {
            currentObject.addClass("less");
            currentObject.html(docketCenter.variables.lesstext);
        }
        currentObject.parent().prev().toggle();
        currentObject.prev().toggle();
        return false;
    }
}   
    css file
    -------

.morelink {
    display: inline-block;
    text-decoration: underline !important;
    color: #26ade4;
    font-style: italic;
}
.morelink:hover,.morelink:focus { text-decoration: underline; color: #26ade4; }

