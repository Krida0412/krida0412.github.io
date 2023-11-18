// Alpine JS
document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: 
            [
                { id: 1, name: 'Brave Corduroy Long Sleeve Shirts', img: 'kemeja1.png', price: 125000 },
                { id: 2, name: 'Mystic Corduroy Long Sleeve Shirts', img: 'kemeja2.png', price: 125000 },
                { id: 3, name: 'Growth Corduroy Long Sleeve Shirts', img: 'kemeja3.png', price: 125000 },
                { id: 4, name: 'Iffle Corduroy Long Sleeve Shirts', img: 'kemeja4.png', price: 125000 },
                { id: 5, name: 'Douve Corduroy Long Sleeve Shirts', img: 'kemeja5.png', price: 125000 },
                { id: 6, name: 'Grith Corduroy Long Sleeve Shirts', img: 'kemeja6.png', price: 125000 },
                { id: 7, name: 'Brook Corduroy Long Sleeve Shirts', img: 'kemeja7.png', price: 125000 },
                { id: 8, name: 'Reever Corduroy Long Sleeve Shirts', img: 'kemeja8.png', price: 125000 },
                { id: 9, name: 'Dreef Corduroy Long Sleeve Shirts', img: 'kemeja9.png', price: 125000 },
                { id: 10, name: 'Yizz Corduroy Long Sleeve Shirts', img: 'kemeja10.png', price: 125000 },
                { id: 11, name: 'Greek Corduroy Long Sleeve Shirts', img: 'kemeja11.png', price: 125000 },
                { id: 12, name: 'Houze Corduroy Long Sleeve Shirts', img: 'kemeja12.png', price: 125000 },
        ],
    }));

    Alpine.store('cart',{
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama di cart 
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada / cart masih kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;    
            } else {
                // jika barang sudah ada,cek apakah barang beda atau sama dengan di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove (id) {
            // ambil item yang mau di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if(cartItem.quantity > 1) {
                // telurusi
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                // jika barangnya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});


// Konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};