exports.seed = function(knex) {
  return knex('expenses').del()
    .then(function() {
      return knex('expenses').insert([
        { title: 'Mua xăng', amount: 150, category: 'Xăng-Xe' },
        { title: 'Tiền điện', amount: 200, category: 'Tất Yếu' },
        { title: 'Bữa trưa', amount: 80, category: 'Cơm/Nước' },
        { title: 'Chuyển tiền tiết kiệm', amount: 500, category: 'Tài Khoản' },
        { title: 'Mua bút viết', amount: 20, category: 'Lặt Vặt' }
      ]);
    });
};
