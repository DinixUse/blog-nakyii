document.addEventListener('DOMContentLoaded', function() {
    // 为每个代码块添加复制按钮
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        // 获取父级pre元素
        const preElement = codeBlock.parentNode;
        
        // 创建复制按钮
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="material-icons">content_copy</i>';
        copyButton.title = '复制代码';
        
        // 将按钮插入到pre元素内，code元素之前
        preElement.insertBefore(copyButton, codeBlock);
        
        // 添加点击事件
        copyButton.addEventListener('click', function() {
            const code = codeBlock.textContent;
            
            // 复制到剪贴板
            navigator.clipboard.writeText(code).then(function() {
                // 显示复制成功提示
                copyButton.innerHTML = '<i class="material-icons">check</i>';
                copyButton.classList.add('copied');
                copyButton.title = '已复制！';
                
                // 2秒后恢复原状
                setTimeout(function() {
                    copyButton.innerHTML = '<i class="material-icons">content_copy</i>';
                    copyButton.classList.remove('copied');
                    copyButton.title = '复制代码';
                }, 2000);
            }).catch(function(err) {
                // 如果失败，显示错误信息
                console.error('复制失败:', err);
                copyButton.innerHTML = '<i class="material-icons">error</i>';
                copyButton.title = '复制失败';
                
                setTimeout(function() {
                    copyButton.innerHTML = '<i class="material-icons">content_copy</i>';
                    copyButton.title = '复制代码';
                }, 2000);
            });
        });
    });
});