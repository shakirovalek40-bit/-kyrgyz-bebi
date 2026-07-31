const items=[
['👶','Боди комплект',990,1290],
['🍼','Avent бөтөлкө',790,990],
['🧸','Жумшак оюнчук',890,1190],
['🚼','Коляска',12990,14990],
['🛏️','Бала керебети',8990,9990],
['🧷','Памперс',1690,1990],
['🛁','Жуунтуу топтому',1490,1790],
['🧦','Байпак',290,390]
];
const grid=document.getElementById('grid');
function render(list){
grid.innerHTML='';
list.forEach(i=>{
grid.innerHTML+=`<div class="card">
<div class="pic">${i[0]}</div>
<div class="info">
<div class="price">${i[2]} сом</div>
<div class="old">${i[3]} сом</div>
<h3>${i[1]}</h3>
<a class="buy" href="#">Себетке кошуу</a>
</div></div>`;
});
}
render(items);
document.getElementById('search').oninput=e=>{
const q=e.target.value.toLowerCase();
render(items.filter(x=>x[1].toLowerCase().includes(q)));
};
