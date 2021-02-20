export let reader = {
	read: function (ele) {
		const self = this
		let text = ele.textContent
		let time = 0
		text.split(" ").forEach(function (word) {
			self.show(word, time + 1000)
			time += 500
		})
	},
	show: function (word, time) {
		setTimeout(function () {
			document.querySelector('#word').textContent = word
		}, time)
	}
}
