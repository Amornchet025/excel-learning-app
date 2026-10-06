import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image, // 👈 Import Image เข้ามาใช้งาน
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lessons = [
  {
    id: 1,
    icon: 'grid-outline',
    title: '1. รู้จัก Microsoft Excel',
    subtitle: 'ทำความรู้จัก Ribbon, Cell, Row และ Column',
    detail: {
      lessonNo: 'บทที่ 1',
      title: '1. รู้จัก Microsoft Excel',
      heroIcon: 'grid-outline',
      description:
        'ทำความเข้าใจโครงสร้างพื้นฐานของโปรแกรม Excel เช่น แถบเครื่องมือ (Ribbon), แถว (Row), คอลัมน์ (Column) และช่องตาราง (Cell) เพื่อเริ่มต้นใช้งานอย่างถูกต้อง',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'โครงสร้างตาราง แถว (Row) และคอลัมน์ (Column)',
        'การเรียกชื่อตำแหน่งเซลล์ เช่น A1, B5',
        'การใช้งานแถบเครื่องมือหลัก (Ribbon)',
      ],
    },
  },
  {
    id: 2,
    icon: 'create-outline',
    title: '2. การป้อนและจัดรูปแบบข้อมูล',
    subtitle: 'การพิมพ์ข้อความ ตัวเลข วันที่ และใส่เส้นขอบ',
    detail: {
      lessonNo: 'บทที่ 2',
      title: '2. การป้อนและจัดรูปแบบข้อมูล',
      heroIcon: 'create-outline',
      description:
        'เรียนรู้วิธีการกรอกข้อมูลประเภทต่างๆ ตลอดจนการปรับแต่งตัวอักษร ใส่สีพื้นหลัง ใส่เส้นขอบตาราง และการจัดวางข้อความให้อ่านง่าย',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'การใส่รูปแบบตัวเลข เช่น สัญลักษณ์เงินบาท %, ทศนิยม',
        'การใส่เส้นขอบตาราง (Borders) และสีพื้นหลัง',
        'การจัดข้อความให้อยู่ตรงกลาง หรือชิดซ้าย/ขวา',
      ],
    },
  },
  {
    id: 3,
    icon: 'calculator-outline',
    title: '3. การใช้สูตรคำนวณเบื้องต้น',
    subtitle: 'เริ่มต้นใช้งาน SUM, AVERAGE และ COUNT',
    detail: {
      lessonNo: 'บทที่ 3',
      title: '3. การใช้สูตรคำนวณเบื้องต้น',
      heroIcon: 'calculator-outline',
      description:
        'เริ่มต้นบวกลบคูณหาร และการใช้ฟังก์ชันพื้นฐานที่จำเป็นในการทำงาน เช่น การหาผลรวม การหาค่าเฉลี่ย และการนับจำนวนรายการ',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'การพิมพ์เครื่องหมาย = เพื่อเริ่มใช้สูตร',
        'วิธีใช้สูตร SUM หาผลรวมในคลิกเดียว',
        'การใช้ AVERAGE หาค่าเฉลี่ย และ COUNT นับจำนวน',
      ],
    },
  },
  {
    id: 4,
    icon: 'apps-outline',
    title: '4. การสร้างตารางและการตรึงแนว',
    subtitle: 'การเปลี่ยนเป็น Excel Table และ Freeze Panes',
    detail: {
      lessonNo: 'บทที่ 4',
      title: '4. การสร้างตารางและการตรึงแนว',
      heroIcon: 'apps-outline',
      description:
        'เมื่อมีข้อมูลจำนวนมาก การล็อกหัวตาราง (Freeze Panes) จะช่วยให้มองเห็นหัวข้อตลอดเวลาแม้อยู่ด้านล่างสุด',
      highlightTitle: 'คีย์ลัดน่ารู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + T เพื่อเปลี่ยนช่วงข้อมูลเป็นตารางอัจฉริยะ',
        'ใช้ Freeze Panes ล็อกแถวบนสุดไม่ให้เลื่อนหาย',
        'มีปุ่มกรองข้อมูล (Filter) ให้ใช้อัตโนมัติ',
      ],
    },
  },
  {
    id: 5,
    icon: 'stats-chart-outline',
    title: '5. การสร้างกราฟและแผนภูมิ',
    subtitle: 'แปลงข้อมูลตารางให้เป็นกราฟดูง่ายในไม่กี่คลิก',
    detail: {
      lessonNo: 'บทที่ 5',
      title: '5. การสร้างกราฟและแผนภูมิ',
      heroIcon: 'stats-chart-outline',
      description:
        'สรุปข้อมูลจากตารางให้อยู่ในรูปแบบกราฟแท่ง กราฟเส้น หรือแผนภูมิวินัยวงกลม เพื่อนำเสนอผลงานได้อย่างมืออาชีพ',
      highlightTitle: 'ขั้นตอนสร้างกราฟ',
      highlightIcon: 'checkmark-circle-outline',
      highlights: [
        'คลุมดำเลือกข้อมูลตารางที่ต้องการ',
        'ไปที่เมนู Insert > เลือกรูปแบบ Chart',
        'ปรับแต่งสีและชื่อหัวข้อกราฟตามต้องการ',
      ],
    },
  },
  {
    id: 6,
    icon: 'filter-outline',
    title: '6. การเรียงลำดับและกรองข้อมูล',
    subtitle: 'การใช้งาน Sort & Filter จัดการข้อมูลชุดใหญ่',
    detail: {
      lessonNo: 'บทที่ 6',
      title: '6. การเรียงลำดับและกรองข้อมูล',
      heroIcon: 'filter-outline',
      description:
        'ค้นหา คัดกรอง และจัดเรียงข้อมูลจากมากไปน้อย หรือเรียงตามตัวอักษร ช่วยให้เข้าถึงข้อมูลที่ต้องการได้รวดเร็ว',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'การเปิดใช้งาน Filter ด้วยคีย์ลัด Ctrl + Shift + L',
        'การเรียงลำดับข้อมูล (Sort A to Z / Z to A)',
        'การเลือกแสดงเฉพาะรายการที่ต้องการ',
      ],
    },
  },
  {
    id: 7,
    icon: 'search-outline',
    title: '7. การค้นหาข้อมูล VLOOKUP & XLOOKUP',
    subtitle: 'ค้นหาและดึงข้อมูลข้ามตารางอย่างมืออาชีพ',
    detail: {
      lessonNo: 'บทที่ 7',
      title: '7. การค้นหาข้อมูล VLOOKUP & XLOOKUP',
      heroIcon: 'search-outline',
      description:
        'สูตรยอดนิยมสำหรับการดึงข้อมูลจากตารางหนึ่งมาใส่อีกตารางหนึ่งตามรหัสสินค้า หรือรหัสพนักงาน',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'ไวยากรณ์และการตั้งค่าสูตร VLOOKUP',
        'วิธีแก้ปัญหาเมื่อ VLOOKUP ค้นหาไม่เจอ (#N/A)',
        'การใช้ XLOOKUP สูตรใหม่ที่ยืดหยุ่นกว่า',
      ],
    },
  },
  {
    id: 8,
    icon: 'color-palette-outline',
    title: '8. การจัดรูปแบบตามเงื่อนไข',
    subtitle: 'การใช้งาน Conditional Formatting เน้นสีข้อมูล',
    detail: {
      lessonNo: 'บทที่ 8',
      title: '8. การจัดรูปแบบตามเงื่อนไข',
      heroIcon: 'color-palette-outline',
      description:
        'ตั้งค่าให้ Excel เปลี่ยนสีตัวอักษร หรือสีพื้นหลังให้อัตโนมัติเมื่อข้อมูลตรงตามเงื่อนไข เช่น ตัวเลขติดลบให้เป็นสีแดง',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'เน้นสีข้อมูลที่มากกว่า/น้อยกว่า ค่าที่กำหนด',
        'การค้นหาและไฮไลต์ข้อมูลที่ซ้ำกัน (Highlight Duplicates)',
        'การใช้ Data Bars และ Color Scales',
      ],
    },
  },
  {
    id: 9,
    icon: 'pie-chart-outline',
    title: '9. การสรุปผลด้วย PivotTable',
    subtitle: 'วิเคราะห์และสรุปรายงานยอดขายแบบด่วน',
    detail: {
      lessonNo: 'บทที่ 9',
      title: '9. การสรุปผลด้วย PivotTable',
      heroIcon: 'pie-chart-outline',
      description:
        'เครื่องมือที่ทรงพลังที่สุดในการนำข้อมูลนับพันแถว มาหมวดหมู่สรุปผลรวม สรุปยอดขาย แยกตามหมวดหมู่ได้ภายในไม่กี่วินาที',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'การสร้าง PivotTable จากตารางข้อมูล',
        'การ ลาก-วาง Fields ในช่อง Rows, Columns และ Values',
        'การปรับเปลี่ยนมุมมองรายงานและ Refresh ข้อมูล',
      ],
    },
  },
  {
    id: 10,
    icon: 'print-outline',
    title: '10. การจัดหน้าและการพิมพ์',
    subtitle: 'ตั้งค่า Page Setup พิมพ์เอกสารไม่ให้ขาดเกิน',
    detail: {
      lessonNo: 'บทที่ 10',
      title: '10. การจัดหน้าและการพิมพ์',
      heroIcon: 'print-outline',
      description:
        'แก้ปัญหาการสั่งพิมพ์แล้วตารางล้นหน้ากระดาษ การตั้งค่า Print Area ล็อกหัวตารางทุกหน้ากระดาษ และปรับสเกลให้พอดี',
      highlightTitle: 'สิ่งที่ได้เรียนรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'การกำหนดพื้นที่พิมพ์ (Set Print Area)',
        'การตั้งค่า Fit to 1 Page บังคับลงกระดาษหน้าเดียว',
        'การตั้งค่าให้หัวตารางแสดงซ้ำทุกหน้าเมื่อสั่งพิมพ์',
      ],
    },
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.appTitle}>Microsoft Excel</Text>
            <Text style={styles.appSubtitle}>เบื้องต้นถึงระดับสูง</Text>
            <Text style={styles.appDesc}>
              สื่อการเรียนรู้สำหรับผู้เริ่มต้น เรียนรู้การจัดการตาราง สูตรคำนวณ และการวิเคราะห์ข้อมูล ครบจบในแอพเดียว
            </Text>
          </View>
          
          {/* 🖼️ เปลี่ยนมาใช้ Image แสดงโลโก้ตรงนี้ */}
          <Image
            source={require('../assets/excel-logo.png')}
            style={styles.logoImage}
          />
        </View>

        {/* รายการบทเรียน */}
        <View style={styles.listContainer}>
          {lessons.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardItem}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Detail', item.detail)}
            >
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={22} color="#107C41" />
              </View>

              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle} numberOfLines={1}>
                  {item.subtitle}
                </Text>
              </View>

              <Ionicons name="arrow-forward-outline" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Good Learning ♥</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8F5',
  },
  scrollContent: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: 16,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A522B',
  },
  appSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#107C41',
    marginBottom: 8,
  },
  appDesc: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
  },
  // 🖼️ สไตล์สำหรับรูปโลโก้ Excel
  logoImage: {
    width: 52,
    height: 52,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  listContainer: {
    gap: 12,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E6F4EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
  },
  footer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#107C41',
  },
});