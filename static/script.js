        // Dados dos itens do leilão
        const auctionItems = [
            {
                id: 1,
                name: "Bolo Red Velvet Premium",
                description: "Bolo red velvet de 3 camadas com cream cheese e decoração artesanal. Serve 12 pessoas.",
                currentBid: 180,
                bidCount: 12,
                imageUrl: ""
            },
            {
                id: 2,
                name: "Torta de Chocolate Belga",
                description: "Torta gourmet com chocolate belga 70% cacau, ganache e frutas vermelhas frescas.",
                currentBid: 220,
                bidCount: 8,
                imageUrl: ""
            },
            {
                id: 3,
                name: "Bolo de Casamento Vintage",
                description: "Bolo de 2 andares decorado com flores de açúcar e detalhes em pasta americana.",
                currentBid: 450,
                bidCount: 15,
                imageUrl: ""
            },
            {
                id: 4,
                name: "Cheesecake de Frutas Vermelhas",
                description: "Cheesecake cremoso com base de biscoito e cobertura de frutas vermelhas da estação.",
                currentBid: 160,
                bidCount: 6,
                imageUrl: ""
            },
            {
                id: 5,
                name: "Cupcakes Gourmet (Dúzia)",
                description: "Conjunto de 12 cupcakes com sabores variados e decoração personalizada.",
                currentBid: 95,
                bidCount: 22,
                imageUrl: ""
            },
            {
                id: 6,
                name: "Bolo Naked Cake Rústico",
                description: "Bolo estilo naked cake com recheio de doce de leite e decoração com flores naturais.",
                currentBid: 280,
                bidCount: 9,
                imageUrl: ""
            }
        ];

        let currentBidItem = null;

        // Função para renderizar o catálogo
        function renderCatalog() {
            const catalog = document.getElementById('catalog');
            catalog.innerHTML = '';

            auctionItems.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.className = 'item-card';
                itemCard.innerHTML = `
                    <div class="item-image">
                        ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder-text\\'>Espaço para foto do bolo</div>';">` : '<div class="placeholder-text">Espaço para foto do bolo</div>'}
                    </div>
                    <div class="item-title">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">
                        <span class="current-bid">R$ ${item.currentBid.toLocaleString()}</span>
                        <span class="bid-count">${item.bidCount} lances</span>
                    </div>
                    <button class="bid-button" onclick="openBidModal(${item.id})">Fazer Lance</button>
                `;
                catalog.appendChild(itemCard);
            });
        }

        // Função para abrir modal de lance
        function openBidModal(itemId) {
            const item = auctionItems.find(i => i.id === itemId);
            currentBidItem = item;
            
            document.getElementById('modalItemName').textContent = item.name;
            document.getElementById('modalCurrentBid').textContent = `R$ ${item.currentBid.toLocaleString()}`;
            document.getElementById('bidAmount').value = '';
            document.getElementById('bidAmount').min = item.currentBid + 50;
            document.getElementById('bidModal').style.display = 'block';
        }

        // Função para fechar modal
        function closeBidModal() {
            document.getElementById('bidModal').style.display = 'none';
            currentBidItem = null;
        }

        // Função para submeter lance
        function submitBid() {
            const bidAmount = parseInt(document.getElementById('bidAmount').value);
            
            if (!bidAmount || bidAmount <= currentBidItem.currentBid) {
                alert('O lance deve ser maior que o valor atual!');
                return;
            }

            // Atualizar o item com o novo lance
            currentBidItem.currentBid = bidAmount;
            currentBidItem.bidCount += 1;

            // Re-renderizar o catálogo
            renderCatalog();
            
            // Fechar modal
            closeBidModal();
            
            // Mostrar confirmação
            alert(`Lance de R$ ${bidAmount.toLocaleString()} confirmado para ${currentBidItem.name}!`);
        }

        // Timer do leilão
        function updateTimer() {
            const timerElement = document.getElementById('timer');
            const auctionEnd = parseFloat(timerElement.getAttribute('data-auction-end')) * 1000; // timestamp em ms
            const now = new Date().getTime();

            let diff = Math.floor((auctionEnd - now) / 1000);

            if (diff < 0) diff = 0;

            let hours = Math.floor(diff / 3600);
            let minutes = Math.floor((diff % 3600) / 60);
            let seconds = diff % 60;

            timerElement.textContent =
                `${hours.toString().padStart(2, '0')}:` +
                `${minutes.toString().padStart(2, '0')}:` +
                `${seconds.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
    renderCatalog();
    updateTimer(); // primeira atualização imediata
    setInterval(updateTimer, 1000); // depois a cada segundo
});


        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            renderCatalog();
            setInterval(updateTimer, 1000);
            
        });

        // Fechar modal ao clicar no X ou fora do modal
        document.querySelector('.close').onclick = closeBidModal;
        window.onclick = function(event) {
            const modal = document.getElementById('bidModal');
            if (event.target === modal) {
                closeBidModal();
            }
        }

        // Permitir Enter para submeter lance
        document.getElementById('bidAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitBid();
            }
        });

(function(){
    function c(){
        var b=a.contentDocument||a.contentWindow.document;if(b){
            var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98163c4fe44bf1cd',t:'MTc1ODI1NTA1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)
            }
        }if(document.body){
            var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);
            if('loading'!==document.readyState)c();
            else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
            else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b)
            {e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}
        }
    }
})();