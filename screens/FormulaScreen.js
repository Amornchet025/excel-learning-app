import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const formulas = [
  {
    id: 1,
    icon: 'calculator-outline',
    title: '1. สูตร SUM (หาผลรวม)',
    subtitle: 'รวมตัวเลขทั้งหมดในช่วงเซลล์ที่กำหนด',
    detail: {
      lessonNo: 'สูตรที่ 1',
      title: 'สูตร SUM (หาผลรวม)',
      heroIcon: 'calculator-outline',
      description:
        'ใช้สำหรับบวกตัวเลขทั้งหมดในช่วงเซลล์ที่เลือก ช่วยให้คำนวณผลรวมได้อย่างรวดเร็วแทนการกดบวกทีละช่อง',
      highlightTitle: 'การใช้งานสูตร SUM',
      highlightIcon: 'bulb-outline',
      highlights: [
        'รูปแบบ: =SUM(A1:A10)',
        'คีย์ลัด: กด Alt + = เพื่อใส่สูตร AutoSum อัตโนมัติ',
        'สูตรจะคิดคำนวณเฉพาะช่องที่เป็นตัวเลขเท่านั้น',
      ],
    },
  },
  {
    id: 2,
    icon: 'analytics-outline',
    title: '2. สูตร AVERAGE (หาค่าเฉลี่ย)',
    subtitle: 'คำนวณค่าเฉลี่ยเลขคณิตของกลุ่มตัวเลข',
    detail: {
      lessonNo: 'สูตรที่ 2',
      title: 'สูตร AVERAGE (หาค่าเฉลี่ย)',
      heroIcon: 'analytics-outline',
      description:
        'ใช้หาค่าเฉลี่ยของข้อมูลตัวเลข โดยระบบจะนำผลรวมมาหารด้วยจำนวนช่องที่มีตัวเลขให้อัตโนมัติ',
      highlightTitle: 'การใช้งานสูตร AVERAGE',
      highlightIcon: 'bulb-outline',
      highlights: [
        'รูปแบบ: =AVERAGE(B1:B10)',
        'ข้ามช่องว่าง: ช่องที่ไม่มีข้อมูลจะไม่ถูกนำมาคิดเป็นตัวหาร',
      ],
    },
  },
  {
    id: 3,
    icon: 'add-circle-outline',
    title: '3. สูตร COUNT / COUNTA (นับจำนวน)',
    subtitle: 'นับจำนวนช่องที่มีข้อมูลตัวเลขหรือข้อความ',
    detail: {
      lessonNo: 'สูตรที่ 3',
      title: 'สูตร COUNT / COUNTA (นับจำนวน)',
      heroIcon: 'add-circle-outline',
      description:
        'ใช้ในการนับจำนวนรายการข้อมูล โดยแบ่งตามประเภทข้อมูลในช่อง',
      highlightTitle: 'ความแตกต่างของทั้ง 2 สูตร',
      highlightIcon: 'bulb-outline',
      highlights: [
        '=COUNT(A1:A10) : นับเฉพาะช่องที่มีตัวเลขเท่านั้น',
        '=COUNTA(A1:A10) : นับทุกช่องที่ไม่ใช่ช่องว่าง (นับทั้งข้อความและตัวเลข)',
      ],
    },
  },
  {
    id: 4,
    icon: 'trending-up-outline',
    title: '4. สูตร MAX / MIN (หาค่ามากสุด/น้อยสุด)',
    subtitle: 'ค้นหาตัวเลขที่สูงที่สุดและต่ำที่สุดในกลุ่มข้อมูล',
    detail: {
      lessonNo: 'สูตรที่ 4',
      title: 'สูตร MAX / MIN (หาค่ามากสุด/น้อยสุด)',
      heroIcon: 'trending-up-outline',
      description:
        'ช่วยดึงค่าตัวเลขสูงสุด (MAX) หรือค่าต่ำสุด (MIN) จากช่วงข้อมูลที่กำหนดมาแสดงผลอย่างรวดเร็ว',
      highlightTitle: 'การใช้งานสูตร MAX / MIN',
      highlightIcon: 'bulb-outline',
      highlights: [
        '=MAX(C1:C20) : ค้นหาค่าตัวเลขที่มากที่สุด',
        '=MIN(C1:C20) : ค้นหาค่าตัวเลขที่น้อยที่สุด',
      ],
    },
  },
  {
    id: 5,
    icon: 'options-outline',
    title: '5. สูตร IF (ตรวจสอบเงื่อนไข)',
    subtitle: 'สร้างเงื่อนไขเปรียบเทียบ เช่น ผ่าน/ไม่ผ่าน, ตัดเกรด',
    detail: {
      lessonNo: 'สูตรที่ 5',
      title: 'สูตร IF (ตรวจสอบเงื่อนไข)',
      heroIcon: 'options-outline',
      description:
        'คำนวณแบบมีเงื่อนไข หากเงื่อนไขเป็นจริงจะแสดงผลลัพธ์หนึ่ง หากเป็นเท็จจะแสดงอีกผลลัพธ์หนึ่ง',
      highlightTitle: 'การใช้งานสูตร IF',
      highlightIcon: 'bulb-outline',
      highlights: [
        'รูปแบบ: =IF(A1>=50, "ผ่าน", "ตก")',
        'รองรับ IF ซ้อน IF สำหรับการตรวจสอบหลายเงื่อนไข',
      ],
    },
  },
  {
    id: 6,
    icon: 'calculator-outline',
    title: '6. สูตร SUMIF / COUNTIF (คำนวณแบบมีเงื่อนไข)',
    subtitle: 'รวมหรือนับเฉพาะข้อมูลที่ตรงตามเงื่อนไขที่ระบุ',
    detail: {
      lessonNo: 'สูตรที่ 6',
      title: 'สูตร SUMIF / COUNTIF',
      heroIcon: 'calculator-outline',
      description:
        'ช่วยบวกหรือนับจำนวนข้อมูลเฉพาะรายการที่ตรงตามเงื่อนไข เช่น รวมยอดขายเฉพาะสินค้าที่ต้องการ',
      highlightTitle: 'ตัวอย่างการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        '=SUMIF(A1:A10, "สินค้า A", B1:B10) : รวมยอด B เฉพาะช่องที่ A เป็น "สินค้า A"',
        '=COUNTIF(A1:A10, ">50") : นับจำนวนช่องที่มีค่ามากกว่า 50',
      ],
    },
  },
  {
    id: 7,
    icon: 'search-outline',
    title: '7. สูตร VLOOKUP / XLOOKUP (ค้นหาข้อมูล)',
    subtitle: 'ค้นหาและดึงข้อมูลจากตารางอื่นตามคีย์ที่กำหนด',
    detail: {
      lessonNo: 'สูตรที่ 7',
      title: 'สูตร VLOOKUP / XLOOKUP',
      heroIcon: 'search-outline',
      description:
        'ใช้ในการค้นหารายการที่ต้องการจากตาราง แล้วดึงข้อมูลในคอลัมน์ที่เกี่ยวข้องมาแสดงผลให้อัตโนมัติ',
      highlightTitle: 'ข้อควรรู้',
      highlightIcon: 'bulb-outline',
      highlights: [
        'รูปแบบ VLOOKUP: =VLOOKUP(คำค้นหา, ตารางข้อมูล, ลำดับคอลัมน์, FALSE)',
        'XLOOKUP เป็นสูตรใหม่ที่ยืดหยุ่นและค้นหาได้ทั้งซ้ายและขวา',
      ],
    },
  },
  {
    id: 8,
    icon: 'text-outline',
    title: '8. สูตร CONCATENATE / TEXTJOIN (เชื่อมข้อความ)',
    subtitle: 'นำข้อความจากหลายๆ เซลล์มารวมเป็นช่องเดียวกัน',
    detail: {
      lessonNo: 'สูตรที่ 8',
      title: 'สูตร CONCATENATE / TEXTJOIN',
      heroIcon: 'text-outline',
      description:
        'ใช้ในการรวมตัวหนังสือจากหลายช่องเข้าด้วยกัน เช่น การนำชื่อและนามสกุลมารวมกัน',
      highlightTitle: 'รูปแบบการเขียน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'ใช้สัญลักษณ์ &: =A1 & " " & B1 (นำช่อง A1 มาต่อกับ B1 เว้นวรรคตรงกลาง)',
        '=TEXTJOIN(" ", TRUE, A1:A5) : รวมข้อความหลายๆ ช่องพร้อมใส่ตัวคั่นให้อัตโนมัติ',
      ],
    },
  },
  {
    id: 9,
    icon: 'calendar-outline',
    title: '9. สูตร TODAY / NOW (วันที่และเวลาปัจจุบัน)',
    subtitle: 'แสดง วัน เดือน ปี หรือเวลาปัจจุบันแบบอัปเดตอัตโนมัติ',
    detail: {
      lessonNo: 'สูตรที่ 9',
      title: 'สูตร TODAY / NOW',
      heroIcon: 'calendar-outline',
      description:
        'ดึงวันที่และเวลาจากเครื่องมาแสดงในตาราง เหมาะกับการทำรายงานหรือคำนวณอายุ/จำนวนวัน',
      highlightTitle: 'การใช้งานง่ายๆ',
      highlightIcon: 'bulb-outline',
      highlights: [
        '=TODAY() : แสดงเฉพาะวันที่ปัจจุบัน',
        '=NOW() : แสดงทั้งวันที่และเวลาปัจจุบัน',
        'อัปเดตให้อัตโนมัติทุกครั้งที่มีการเปิดหรือคำนวณไฟล์',
      ],
    },
  },
  {
    id: 10,
    icon: 'cut-outline',
    title: '10. สูตร TRIM / UPPER / LOWER (จัดรูปแบบข้อความ)',
    subtitle: 'ตัดช่องว่างส่วนเกินและแปลงตัวพิมพ์เล็ก-ใหญ่',
    detail: {
      lessonNo: 'สูตรที่ 10',
      title: 'สูตร TRIM / UPPER / LOWER',
      heroIcon: 'cut-outline',
      description:
        'ใช้สำหรับทำความสะอาดและจัดระเบียบข้อมูลข้อความให้อยู่ในรูปแบบมาตรฐานเดียวกัน',
      highlightTitle: 'สรุปฟังก์ชันข้อความ',
      highlightIcon: 'bulb-outline',
      highlights: [
        '=TRIM(A1) : ลบช่องว่างส่วนเกินหน้า-หลังข้อความออก',
        '=UPPER(A1) : แปลงข้อความภาษาอังกฤษเป็นตัวพิมพ์ใหญ่ทั้งหมด',
        '=LOWER(A1) : แปลงข้อความภาษาอังกฤษเป็นตัวพิมพ์เล็กทั้งหมด',
      ],
    },
  },
];

export default function FormulaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.appTitle}>สูตรคำนวณ Excel</Text>
            <Text style={styles.appSubtitle}>Formulas & Functions</Text>
            <Text style={styles.appDesc}>
              รวบรวม 10 สูตรคำนวณพื้นฐานที่ต้องรู้ ช่วยให้จัดการข้อมูลและคำนวณได้อย่างถูกต้อง แม่นยำ และรวดเร็ว
            </Text>
          </View>
          <View style={styles.logoBadge}>
            <Ionicons name="calculator-outline" size={28} color="#FFFFFF" />
          </View>
        </View>

        {/* รายการสูตรการคำนวณ */}
        <View style={styles.listContainer}>
          {formulas.map((item) => (
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
  logoBadge: {
    width: 50,
    height: 50,
    backgroundColor: '#107C41',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#107C41',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
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
});