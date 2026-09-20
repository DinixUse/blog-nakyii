document.addEventListener('DOMContentLoaded', function() {
  const articleContent = document.querySelector('.article-content');
  const navigation = document.getElementById('articleNavigation');
  const navList = document.querySelector('.nav-list');
  const navIndicator = document.querySelector('.nav-indicator');
  
  // 创建展开/收起按钮
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'toggle-btn';
  toggleBtn.innerHTML = '▼';
  toggleBtn.setAttribute('aria-label', '展开/收起导航');
  navigation.appendChild(toggleBtn);
  
  if (!articleContent || !navigation) return;
  
  // 收集所有标题
  const headings = Array.from(articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  
  if (headings.length === 0) {
    navigation.style.display = 'none';
    return;
  }
  
  // 为每个标题创建导航项
  headings.forEach((heading, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    // 生成锚点ID
    const anchorId = `heading-${index}`;
    heading.id = anchorId;
    
    // 设置链接文本和目标
    a.textContent = heading.textContent;
    a.href = `#${anchorId}`;
    
    // 添加缩进样式
    const level = parseInt(heading.tagName.charAt(1));
    li.style.paddingLeft = `${(level - 1) * 12}px`;
    
    li.appendChild(a);
    navList.appendChild(li);
  });
  
  // 滚动监听和高亮当前标题
  function updateActiveHeading() {
    const scrollPosition = window.scrollY + 150;
    const viewportHeight = window.innerHeight;
    
    let activeHeading = null;
    let closestDistance = Infinity;
    
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      const headingTop = rect.top + window.scrollY;
      const headingBottom = headingTop + rect.height;
      
      // 检查标题是否在可视区域内
      const isInViewport = rect.top <= viewportHeight * 0.7 && rect.bottom >= viewportHeight * 0.3;
      
      if (isInViewport) {
        const distance = Math.abs(scrollPosition - headingTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          activeHeading = heading;
        }
      }
    });
    
    // 更新活动状态
    const navItems = navList.querySelectorAll('li');
    navItems.forEach((item, index) => {
      if (headings[index] === activeHeading) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // 更新指示器位置
    if (activeHeading) {
      const activeIndex = headings.indexOf(activeHeading);
      const activeItem = navItems[activeIndex];
      if (activeItem) {
        const itemRect = activeItem.getBoundingClientRect();
        const navListRect = navList.getBoundingClientRect();
        const relativeTop = itemRect.top - navListRect.top;
        
        navIndicator.style.height = `${itemRect.height}px`;
        navIndicator.style.transform = `translateY(${relativeTop}px)`;
        navIndicator.style.opacity = '1';
      }
    } else {
      navIndicator.style.opacity = '0';
    }
  }
  
  // 平滑滚动到标题
  navList.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 80; // 80px的偏移量
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  });
  
  // 监听滚动事件
  window.addEventListener('scroll', updateActiveHeading);
  window.addEventListener('resize', updateActiveHeading);
  
  // 添加展开/收起功能
  toggleBtn.addEventListener('click', function() {
    navigation.classList.toggle('collapsed');
    const isCollapsed = navigation.classList.contains('collapsed');
    toggleBtn.setAttribute('aria-expanded', !isCollapsed);
  });
  
  // 初始化按钮状态
  toggleBtn.setAttribute('aria-expanded', 'true');
  
  // 初始化
  updateActiveHeading();
  
  // 添加键盘导航
  document.addEventListener('keydown', function(e) {
    const activeItem = navList.querySelector('.active');
    if (!activeItem) return;
    
    const allItems = Array.from(navList.querySelectorAll('li'));
    const currentIndex = allItems.indexOf(activeItem);
    
    if (e.key === 'ArrowDown' && currentIndex < allItems.length - 1) {
      e.preventDefault();
      const nextItem = allItems[currentIndex + 1];
      nextItem.querySelector('a').click();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault();
      const prevItem = allItems[currentIndex - 1];
      prevItem.querySelector('a').click();
    }
  });
});