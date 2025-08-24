const tabContainers = document.querySelectorAll('.tabs');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const tabContents = container.querySelectorAll('.tab__content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('tab_active'));
                
                tabContents.forEach(content => content.classList.remove('tab__content_active'));
                
                tab.classList.add('tab_active');
                
                if (tabContents[index]) {
                    tabContents[index].classList.add('tab__content_active');
                }
            });
        });
    });