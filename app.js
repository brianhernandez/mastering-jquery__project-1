$(document).ready(function() {
  var $users = $('.users');

  $.get('data/users.json', function(data) {
    $(data).each(function(index) {
      // if (index % === 0) {
      //   $
      // }
      $users.append(buildUserStub(data[index]));
      // $users.append(buildUserCard(data[index]));
    });
  });

  $users.on('click', function(event) {
    // console.log(event);
    // console.log($(event).parents('.user-stub'));
    console.log(this);
    console.log($(this));
    $(this).children('.user-stub').removeClass('selected');
    $(event.target).parents('.user-stub').addClass('selected');
  });

  function buildUserStub(indexedObject) {
    var $userStub = $('<div class="col-md-4 user-stub" id="'+indexedObject.id+'"></div>"'),
        $userStubWrapper = $('<div class="user-stub__wrapper"></div>"'),
        $userStubImg = $('<div class="user-stub__img"></div>'),
        $userStubUsername = $('<h2 class="user-stub__username text-center">'+indexedObject.username+'</h2>'),
        $userStubEmailLabel = $('<h6>Email</h6>'),
        $userStubEmail =$('<p class="user-stub__email">'+indexedObject.email+'</p>');

    $($userStubImg).append($userStubUsername);
    $($userStubWrapper)
      .append($userStubImg)
      .append($userStubEmailLabel)
      .append($userStubEmail);
    $($userStub).append($userStubWrapper);

    return $userStub;
  }

  function buildUserCard(indexedObject) {
    var $userCard = $('<div class="col-md-4 user-card"></div>'),
        $userCardImg = $('<div class="user-card__img"></div>'),
        $userCardUser = $('<h2 class="user-card__username text-center">'+indexedObject.username+'</h2>'),
        $userCardNameLabel = $('<h6>Name</h6>'),
        $userCardName = $('<p class="user-card__name">'+indexedObject.name+'</p>'),
        $userCardEmailLabel = $('<h6>Email</h6>'),
        $userCardEmail = $('<p class="user-card__email">'+indexedObject.email+'</p>'),
        $userCardAddressLabel = $('<h6>Address</h6>'),
        $userCardAddress = $('<p class="user-card__address">');

        if (indexedObject.address) {
          $userCardAddressStreet = $('<span class="user-card__address-street">'+indexedObject.address.street+'</span><br />'),
          $userCardAddressSuite = $('<span class="user-card__address-suite">'+indexedObject.address.suite+'</span><br />'),
          $userCardAddressCity = $('<span class="user-card__address-city">'+indexedObject.address.city+',</span>'),
          $userCardAddressZip = $('<span class="user-card__address-zipcode">'+indexedObject.address.zipcode+'</span>');
          $userCardAddressGeo = $('<div class="user-card__address-geo">'),
          $userCardAddressGeoLat = $('<span class="user-card__address-geo-label">Latitude: </span><span class="user-card__address-geo-lat">'+indexedObject.address.geo.lat+'</span>'),
          $userCardAddressGeoLng = $('<span class="user-card__address-geo-label">Longitude: </span><span class="user-card__address-geo-lng">'+indexedObject.address.geo.lng+'</span>');
        }

        $userCardPhoneLabel = $('<h6>Phone</h6>'),
        $userCardPhone = $('<p class="user-card__phone">'+indexedObject.phone+'</p>'),
        $userCardWebsiteLabel = $('<h6>Website</h6>'),
        $userCardWebsite = $('<p class="user-card__website">'+indexedObject.website+'</p>'),
        $userCardCompanyLabel = $('<h6>Company</h6>'),
        $userCardCompany = $('<p class="user-card__company">'),
        $userCardCompanyName = ('<span class="user-card__company-name"><span class="user-card__company-label">Name: </span>'+indexedObject.company.name+'</span>'),
        $userCardCompanyCatchPhrase = ('<span class="user-card__company-catch-phrase"><span class="user-card__company-label">Catch Phrase: </span>'+indexedObject.company.catchPhrase+'</span>'),
        $userCardCompanyBs = $('<span class="user-card__company-bs"><span class="user-card__company-label">BS: </span>'+indexedObject.company.bs+'</span>');

    $($userCardImg).append($userCardUser);
    $userCard.append($userCardImg);
    $userCard.append($userCardNameLabel)
      .append($userCardName)
      .append($userCardEmailLabel)
      .append($userCardEmail);

    if (indexedObject.address) {
      $userCard.append($userCardAddressLabel);
      $($userCardAddress)
        .append($userCardAddressStreet)
        .append($userCardAddressSuite)
        .append($userCardAddressCity)
        .append($userCardAddressZip);
      $userCard.append($userCardAddress);
      $($userCardAddressGeo)
        .append($userCardAddressGeoLat).append($userCardAddressGeoLng);
      $userCard.append($userCardAddressGeo);
    }

    $userCard
      .append($userCardPhoneLabel)
      .append($userCardPhone)
      .append($userCardWebsiteLabel)
      .append($userCardWebsite)
      .append($userCardCompanyLabel);
    $($userCardCompany)
      .append($userCardCompanyName)
      .append($userCardCompanyCatchPhrase)
      .append($userCardCompanyBs);
    $userCard.append($userCardCompany);

    return $userCard;
  }








});
