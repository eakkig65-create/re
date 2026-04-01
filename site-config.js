/**
 * ตั้งค่าระบบ re-main — ใช้ร่วมกันทั้งหน้าผู้ใช้ (index) และหน้าแอดมิน
 *
 * BOOKING_DATA_BASE_URL: URL โฟลเดอร์รากของเว็บที่มี data/bookings.json
 *   - ว่าง '' = หน้า index ใช้โฟลเดอร์เดียวกับตัวเอง; หน้าในโฟลเดอร์ admin-web จะดึงจากรากโปรเจกต์อัตโนมัติ (sync.js)
 *   - ถ้า deploy แยกโดเมน ให้ใส่เต็ม เช่น 'https://ชื่อผู้ใช้.github.io/re-main/'
 */
window.BOOKING_DATA_BASE_URL = '';

/**
 * เข้าสู่ระบบแอดมิน (ฝั่งลูกข่าย — เปลี่ยน username/password ก่อนใช้งานจริง)
 */
window.ADMIN_LOGIN = {
    username: 'admin',
    password: 'admin123'
};
