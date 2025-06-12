document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const goTeam = document.getElementById('goTeam');
    const valTeam = document.getElementById('valTeam');
    const goBtn = document.getElementById('goBtn');
    const valBtn = document.getElementById('valBtn');
    
    // 检查元素是否成功获取
    if (!goTeam || !valTeam || !goBtn || !valBtn) {
        console.error('未能找到必要的DOM元素');
        return;
    }
    
    // 模拟的阵营人数
    let goCount = 1250;
    let valCount = 980;
    
    // 绑定事件 - 使用更可靠的方式
    function bindEvents() {
		console.log("绑定事件");
        // 移除旧的事件监听器（避免重复绑定）
        goBtn.removeEventListener('click', handleGoClick);
        valBtn.removeEventListener('click', handleValClick);
        
        // 添加新的事件监听器
        goBtn.addEventListener('click', handleGoClick);
        valBtn.addEventListener('click', handleValClick);
        
        // 添加鼠标事件
        goTeam.addEventListener('mouseenter', handleGoHover);
        valTeam.addEventListener('mouseenter', handleValHover);
        goTeam.addEventListener('mouseleave', handleMouseLeave);
        valTeam.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // GO学长阵营点击事件
    function handleGoClick() {
        console.log('GO按钮被点击');
        applyTeamEffect(goTeam, valTeam);
        goCount += Math.floor(Math.random() * 50) + 1;
        updateButtonText();
		
		// 移除事件监听器
		goTeam.removeEventListener('mouseenter', handleGoHover);
		valTeam.removeEventListener('mouseenter', handleValHover);
		goTeam.removeEventListener('mouseleave', handleMouseLeave);
		valTeam.removeEventListener('mouseleave', handleMouseLeave);
    }
    
	// 瓦学弟阵营点击事件
    function handleValClick() {
        console.log('VAL按钮被点击'); 
        applyTeamEffect(valTeam, goTeam);
        valCount += Math.floor(Math.random() * 50) + 1;
        updateButtonText();
		
		// 移除事件监听器
		goTeam.removeEventListener('mouseenter', handleGoHover);
		valTeam.removeEventListener('mouseenter', handleValHover);
		goTeam.removeEventListener('mouseleave', handleMouseLeave);
		valTeam.removeEventListener('mouseleave', handleMouseLeave);
    }
    
	// 鼠标悬停效果
    function handleGoHover() {
        if (!goTeam.classList.contains('dominant')) {
            goTeam.style.flex = '1.1';
            valTeam.style.flex = '0.9';
        }
    }
    
    function handleValHover() {
        if (!valTeam.classList.contains('dominant')) {
            valTeam.style.flex = '1.1';
            goTeam.style.flex = '0.9';
        }
    }
    
    function handleMouseLeave() {
        if (!goTeam.classList.contains('dominant') && !valTeam.classList.contains('dominant')) {
            goTeam.style.flex = '1';
            valTeam.style.flex = '1';
        }
    }
    
    // 应用团队效果
    function applyTeamEffect(activeTeam, inactiveTeam) {
        activeTeam.style.flex = '1.5';
        inactiveTeam.style.flex = '0.7';
        activeTeam.classList.add('dominant');
        inactiveTeam.classList.remove('dominant');
    }
    
    // 更新按钮文本
    function updateButtonText() {
        goBtn.textContent = `${goCount} 名 GO学长`;
        valBtn.textContent = `${valCount} 名 瓦学弟`;
    }
	
    // 初始化事件绑定
    bindEvents();
    
    // 调试
    console.log('GO按钮:', goBtn);
    console.log('VAL按钮:', valBtn);
});
