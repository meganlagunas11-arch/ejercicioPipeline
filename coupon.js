const test = require('node:test');
const assert = require('node:assert');

// 1. Lógica del cupón
function applyCoupon(total, coupon) {
  if (coupon === 'DESCUENTO20' && total > 50.0) {
    return Number((total * 0.8).toFixed(2));
  }
  return total;
}

// 2. Simulación E2E de carrito
test('Aplica 20% si supera $50.00 MXN', () => {
  assert.strictEqual(applyCoupon(100.0, 'DESCUENTO20'), 80.0);
});

test('No aplica si es $50.00 o menor', () => {
  assert.strictEqual(applyCoupon(50.0, 'DESCUENTO20'), 50.0);
  assert.strictEqual(applyCoupon(30.0, 'DESCUENTO20'), 30.0);
});