// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Başlangıçta sadece Anasayfa içeriğini göster
    openTab('anasayfa');
});

function openTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

function toggleServices() {
    var serviceContent = document.getElementById('serviceContent');

    // Toggle the display property
    if (serviceContent.style.display === 'none' || serviceContent.style.display === '') {
        serviceContent.style.display = 'block';
    } else {
        serviceContent.style.display = 'none';
    }
}

document.getElementById('hizmetler').addEventListener('mouseover', function () {
    var serviceButtons = document.getElementById('serviceContainer').getElementsByTagName('button');
    for (var i = 0; i < serviceButtons.length; i++) {
        serviceButtons[i].style.display = 'block';
    }
});

document.getElementById('hizmetler').addEventListener('mouseout', function () {
    var serviceButtons = document.getElementById('serviceContainer').getElementsByTagName('button');
    for (var i = 0; i < serviceButtons.length; i++) {
        serviceButtons[i].style.display = 'none';
    }
});

function openServiceTab(serviceTab) {
    var serviceTabs = document.querySelectorAll('#serviceContent .service-tab');
    serviceTabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var selectedServiceTab = document.getElementById(serviceTab);
    if (selectedServiceTab) {
        selectedServiceTab.style.display = 'block';
    }
}
