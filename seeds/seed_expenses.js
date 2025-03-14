exports.seed = function(knex) {
  return knex('expenses').del()
    .then(function() {
      return knex('expenses').insert([
        { title: 'Mua cà phê', amount: 45.00, category: 'Ăn uống' },
        { title: 'Đổ xăng xe', amount: 120.00, category: 'Di chuyển' },
        { title: 'Mua sách tiếng anh', amount: 250.00, category: 'Học tập' }
      ]);
    });
};
