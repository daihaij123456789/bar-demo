(function () {
	var Menubar=function () {
		this.el=document.querySelector('#sidbar ul');
		this.stata='allClose';
		this.el.addEventListener('click',function (e) {
			e.stopPropagation();
		})
		var self=this;
		this.currentOpendMenuContent=null;
		this.menuList=document.querySelectorAll('#sidbar ul>li');
		for (var i = 0; i < this.menuList.length; i++) {
			this.menuList[i].addEventListener('click',function (e) {
				var menuContentEI=document.getElementById(e.currentTarget.id+"-content");
				if (self.stata==='allClose') {

				console.log('打开'+menuContentEI.id);
				menuContentEI.style.top='0';
				menuContentEI.style.left='-85px';
				menuContentEI.className='nav-content';
				menuContentEI.classList.add('menuContent-move-right');
				self.stata='hasOpened';
				self.currentOpendMenuContent=menuContentEI;
				}else{
					console.log('关闭'+self.currentOpendMenuContent.id);
					self.currentOpendMenuContent.style.top='0';
					self.currentOpendMenuContent.style.left='35px';
					self.currentOpendMenuContent.className='nav-content';
					self.currentOpendMenuContent.classList.add('menuContent-move-left');
					console.log('打开'+menuContentEI.id);
					menuContentEI.className='nav-content';
					menuContentEI.style.top='250px';
					menuContentEI.style.left='35px';
					menuContentEI.classList.add('menuContent-move-up');
					self.stata='hasOpened';
					self.currentOpendMenuContent=menuContentEI;
				}
			})
		}
		var menuContentList = document.querySelectorAll('.nav-content > div.nav-con-close');
		for (var i = 0; i < menuContentList.length; i++) {
			menuContentList[i].addEventListener('click',function (e) {
				var menuContent=e.currentTarget.parentNode;
				menuContent.style.top='0';
				menuContent.style.left='35px';
				menuContent.className='nav-content';
				menuContent.classList.add('menuContent-move-left');
				this.stata='allClose'
			})
		}
	}
	var Sidbar=function (eId,closeId) {
		this.stata='opened';
		this.el=document.getElementById(eId||'sidbar');
		this.closeBarEL=document.getElementById(closeId||'closeBar');
		var self=this;
		var muenbar=new Menubar();
		this.el.addEventListener('click',function (enevt) {
			if (event.target!==self.el) {
				self.triggerSwitch()
			}
		})
	}
	Sidbar.prototype.close=function(){
		console.log('close');
		this.el.className='sidbar-move-left';
		this.closeBarEL.className='closebar-move-right';
		this.stata="close";
	};
	Sidbar.prototype.open=function(){
		console.log('open');
		this.el.className='sidbar-move-right';
		this.el.style.left='-120px';
		this.closeBarEL.className='closebar-move-left';
		this.closeBarEL.style.left='160px';
		this.stata="opened";
	};
	Sidbar.prototype.triggerSwitch=function () {
		if (this.stata=='opened') {
			this.close();
		}else{
			this.open()
		}
	}
	var sidbar=new Sidbar();
	
})()