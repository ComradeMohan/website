function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
window.onload = () => {
    const sections = document.querySelectorAll('section[id]');
    const navlinksSidebar = document.querySelectorAll('.sidebar li a');
    const navlinksHeader = document.querySelectorAll('.header-bar li a');
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 1500;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinksSidebar.forEach(link => {
                    link.classList.remove('active');
                });
                navlinksHeader.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('.sidebar li a[href="#' + id + '"]').classList.add('active');
                document.querySelector('.header-bar li a[href="#' + id + '"]').classList.add('active');
            }
        });
    };
    navlinksSidebar.forEach(link => {
        link.addEventListener('click', () => {
            hideSidebar();
        });
    });

    navlinksHeader.forEach(link => {
        link.addEventListener('click', () => {
            navlinksSidebar.forEach(navlink => {
                navlink.classList.remove('active');
            });
            navlinksHeader.forEach(headerLink => {
                headerLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
};
gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );
document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll('.animate-on-scroll');
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        animatedElements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('animate');
            } else {
                el.classList.remove('animate'); // Remove animation class if element is out of view
            }
        });
    }

    window.addEventListener('scroll', onScroll);

    // Trigger the animation on page load
    onScroll();
});


// skills animations
document.addEventListener("DOMContentLoaded", function() {
    var skillsSection = document.querySelector('#skills');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkillsSection() {
        if (isInViewport(skillsSection)) {
            skillsSection.classList.add('fade-in-up');
            animateSkillBars();
        } else {
            skillsSection.classList.remove('fade-in-up');
        }
    }

    function animateSkillBars() {
        var skillBars = document.querySelectorAll('.skill-bar-value');
        skillBars.forEach(function(bar) {
            bar.style.width = bar.dataset.value + '%';
        });
    }

    window.addEventListener('scroll', animateSkillsSection);

    // Trigger the animation on page load
    animateSkillsSection();
});
var icon = document.getElementById("toggle");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        toggle.src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbYTd4zxRDJ5Fj9KFxGw-lyvx6HlBbt985BH-VKXhR_UGk2ZXwrbwBcEpuYoh9kVblgg5PPGptpEhCe-oC-whTZJRzZu6Kcg_A=s2560";
    }
    else{
        toggle.src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYfLxrXr6y7u0b-0qGkwvcWIPocSNvO2oHewzp-l-6kyzcq8bwL1LVDCkO5JWqzqpOKtLd7wGR9dAr-L_4mVbAWhdn0NCigrsA=s2560";
    }
}
var icon = document.getElementById("togglemobile");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        togglemobile.src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbYTd4zxRDJ5Fj9KFxGw-lyvx6HlBbt985BH-VKXhR_UGk2ZXwrbwBcEpuYoh9kVblgg5PPGptpEhCe-oC-whTZJRzZu6Kcg_A=s2560";
    }
    else{
        togglemobile.src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYfLxrXr6y7u0b-0qGkwvcWIPocSNvO2oHewzp-l-6kyzcq8bwL1LVDCkO5JWqzqpOKtLd7wGR9dAr-L_4mVbAWhdn0NCigrsA=s2560";
    }
    }
    $(document).on('click','.portfolio-filter li',function(){
        $(this).addClass('portfolio-filter-active').siblings().removeClass('portfolio-filter-active')
    });
    
 /*portfolio-filter---------------------------------*/
 $(document).ready(function(){
        $('.list').click(function(){
            const value = $(this).attr('data-filter');
            if(value == 'all'){
                $('.portfolio-box').show('1000');
            }
            else{
                $('.portfolio-box').not('.'+value).hide('1000');
                $('.portfolio-box').filter('.'+value).show('1000');
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll(".portfolio-image");
      
        images.forEach(image => {
          const placeholder = image.nextElementSibling;
          const src = image.getAttribute("data-src");
          
          image.src = src;
      
          image.onload = function() {
            placeholder.style.display = "none";
          }
      
          image.onerror = function() {
            placeholder.textContent = "Image not available";
          }
        });
      });
      