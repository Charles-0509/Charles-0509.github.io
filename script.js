// 分享按钮功能
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button button');
    
    shareButton.addEventListener('click', function() {
        // 检查是否支持网页分享API
        if (navigator.share) {
            navigator.share({
                title: 'Charles - 个人主页',
                text: 'Charles的个人主页，欢迎访问！',
                url: window.location.href
            })
            .then(() => console.log('分享成功'))
            .catch((error) => console.log('分享失败:', error));
        } else {
            // 不支持分享API时，复制链接到剪贴板
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            
            // 显示提示
            alert('链接已复制到剪贴板！');
        }
    });
    
    // 添加页面加载动画效果
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        profileCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }, 200);
    
    // 为标签添加随机颜色
    const tags = document.querySelectorAll('.tag');
    const colors = ['#e1f5fe', '#e8f5e9', '#fff8e1', '#f3e5f5', '#e8eaf6', '#e0f2f1'];
    const textColors = ['#0288d1', '#388e3c', '#ffa000', '#8e24aa', '#3949ab', '#00796b'];
    
    tags.forEach((tag, index) => {
        const colorIndex = index % colors.length;
        tag.style.backgroundColor = colors[colorIndex];
        tag.style.color = textColors[colorIndex];
    });
});
