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

const shortcuts = [
  {
    id: 1,
    icon: 'copy-outline',
    title: '1. Ctrl + C (คัดลอก)',
    subtitle: 'คัดลอกข้อมูลในเซลล์ที่เลือก',
    detail: {
      lessonNo: 'คีย์ลัดที่ 1',
      title: 'คีย์ลัด Ctrl + C (คัดลอกข้อมูล)',
      heroIcon: 'copy-outline',
      description:
        'ใช้สำหรับคัดลอกข้อมูล ข้อความ หรือสูตรในเซลล์ที่เลือกไว้ ไปเก็บไว้ในคลิปบอร์ด (Clipboard) เพื่อนำไปวางในตำแหน่งอื่น',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + C เพื่อคัดลอกช่วงเซลล์ที่ต้องการ',
        'เส้นประจะวิ่งรอบเซลล์ที่ถูกคัดลอก',
        'กด Esc เพื่อยกเลิกการเลือกคัดลอก',
      ],
    },
  },
  {
    id: 2,
    icon: 'clipboard-outline',
    title: '2. Ctrl + V (วางข้อมูล)',
    subtitle: 'วางข้อมูลที่คัดลอกลงในเซลล์เป้าหมาย',
    detail: {
      lessonNo: 'คีย์ลัดที่ 2',
      title: 'คีย์ลัด Ctrl + V (วางข้อมูล)',
      heroIcon: 'clipboard-outline',
      description:
        'ใช้นำข้อมูล ข้อความ หรือสูตรที่ได้คัดลอกไว้ (Ctrl + C) มาวางลงในเซลล์หรือตำแหน่งที่เลือกไว้ปัจจุบัน',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + V เพื่อวางข้อมูลทั้งหมด',
        'ใช้ Ctrl + Alt + V สำหรับ Paste Special (วางเฉพาะค่า/เฉพาะสูตร/เฉพาะรูปแบบ)',
      ],
    },
  },
  {
    id: 3,
    icon: 'cut-outline',
    title: '3. Ctrl + X (ย้ายข้อมูล)',
    subtitle: 'ตัด/ย้ายข้อมูลจากตำแหน่งเดิม',
    detail: {
      lessonNo: 'คีย์ลัดที่ 3',
      title: 'คีย์ลัด Ctrl + X (ย้ายข้อมูล)',
      heroIcon: 'cut-outline',
      description:
        'ใช้ย้ายข้อมูลจากช่องเดิมไปยังช่องใหม่ โดยข้อมูลในช่องเดิมจะถูกลบออกเมื่อนำไปวางในตำแหน่งใหม่',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + X บนเซลล์ที่ต้องการย้าย',
        'เลือกตำแหน่งใหม่ แล้วกด Ctrl + V เพื่อวางข้อมูล',
      ],
    },
  },
  {
    id: 4,
    icon: 'arrow-undo-outline',
    title: '4. Ctrl + Z (เลิกทำ / Undo)',
    subtitle: 'ย้อนกลับการกระทำล่าสุด',
    detail: {
      lessonNo: 'คีย์ลัดที่ 4',
      title: 'คีย์ลัด Ctrl + Z (ย้อนกลับการกระทำ)',
      heroIcon: 'arrow-undo-outline',
      description:
        'ใช้เมื่อทำการพิมพ์ผิด ลบผิด หรือทำคำสั่งผิดพลาด เพื่อย้อนกลับคำสั่งก่อนหน้าได้ทันที',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + Z ซ้ำๆ เพื่อย้อนกลับหลายๆ ขั้นตอน',
        'สามารถย้อนกลับแก้ไขข้อผิดพลาดได้สูงสุดหลายสิบขั้นตอน',
      ],
    },
  },
  {
    id: 5,
    icon: 'arrow-redo-outline',
    title: '5. Ctrl + Y (ทำซ้ำ / Redo)',
    subtitle: 'ทำซ้ำคำสั่งล่าสุด หรือยกเลิกการ Undo',
    detail: {
      lessonNo: 'คีย์ลัดที่ 5',
      title: 'คีย์ลัด Ctrl + Y (ทำซ้ำคำสั่ง)',
      heroIcon: 'arrow-redo-outline',
      description:
        'ใช้ทำซ้ำการกระทำล่าสุดอีกครั้ง เช่น การใส่สี หรือใช้ยกเลิกการกด Undo (Ctrl+Z) ที่เพิ่งย้อนกลับไป',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + Y เพื่อยกเลิกคำสั่ง Undo',
        'ใช้ทำซ้ำการจัดรูปแบบตารางล่าสุดได้อย่างรวดเร็ว',
      ],
    },
  },
  {
    id: 6,
    icon: 'save-outline',
    title: '6. Ctrl + S (บันทึกไฟล์ / Save)',
    subtitle: 'บันทึกความเปลี่ยนแปลงของไฟล์งาน',
    detail: {
      lessonNo: 'คีย์ลัดที่ 6',
      title: 'คีย์ลัด Ctrl + S (บันทึกงาน)',
      heroIcon: 'save-outline',
      description:
        'ช่วยเซฟไฟล์งานปัจจุบันทันที เพื่อป้องกันข้อมูลสูญหายเมื่อเกิดเหตุการณ์ไม่คาดคิด เช่น เครื่องดับ หรือโปรแกรมปิดเอง',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'ควรกด Ctrl + S บ่อยๆ ระหว่างการทำงาน',
        'สำหรับการบันทึกเป็นไฟล์ใหม่ให้กด F12 (Save As)',
      ],
    },
  },
  {
    id: 7,
    icon: 'search-outline',
    title: '7. Ctrl + F (ค้นหาข้อมูล / Find)',
    subtitle: 'ค้นหาข้อความ หรือตัวเลขในแผ่นงาน',
    detail: {
      lessonNo: 'คีย์ลัดที่ 7',
      title: 'คีย์ลัด Ctrl + F (ค้นหาข้อมูล)',
      heroIcon: 'search-outline',
      description:
        'เปิดหน้าต่างค้นหาเพื่อหาข้อความ ตัวเลข หรือสูตรที่ต้องการในแผ่นงานได้อย่างรวดเร็ว ไม่ต้องเลื่อนหาเอง',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + F พิมพ์คำที่ต้องการค้นหาแล้วกด Enter',
        'กด Ctrl + H หากต้องการค้นหาและแทนที่ข้อความ (Replace)',
      ],
    },
  },
  {
    id: 8,
    icon: 'apps-outline',
    title: '8. Ctrl + T (สร้างตารางอัจฉริยะ)',
    subtitle: 'เปลี่ยนช่วงข้อมูลเป็น Excel Table',
    detail: {
      lessonNo: 'คีย์ลัดที่ 8',
      title: 'คีย์ลัด Ctrl + T (สร้าง Excel Table)',
      heroIcon: 'apps-outline',
      description:
        'แปลงช่วงข้อมูลธรรมดาให้เป็นตารางอัจฉริยะที่มีสีสลับแถว พร้อมปุ่มกรองข้อมูล (Filter) และขยายตารางให้อัตโนมัติ',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'คลิกที่ช่วงข้อมูลแล้วกด Ctrl + T',
        'ตารางอัจฉริยะจะช่วยขยายสูตรลงมาทุกแถวให้อัตโนมัติ',
      ],
    },
  },
  {
    id: 9,
    icon: 'calculator-outline',
    title: '9. Alt + = (AutoSum)',
    subtitle: 'ใส่สูตร SUM หาผลรวมอัตโนมัติ',
    detail: {
      lessonNo: 'คีย์ลัดที่ 9',
      title: 'คีย์ลัด Alt + = (ใส่สูตร AutoSum)',
      heroIcon: 'calculator-outline',
      description:
        'คีย์ลัดเด็ดสำหรับคอร์ส Excel ช่วยใส่สูตร =SUM() และเลือกช่วงตัวเลขด้านบนหรือด้านข้างให้อัตโนมัติในคลิกเดียว',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'วางเคอร์เซอร์ใต้แถวตัวเลขแล้วกด Alt และ = พร้อมกัน',
        'กด Enter เพื่อยืนยันการคำนวณผลรวมทันที',
      ],
    },
  },
  {
    id: 10,
    icon: 'filter-outline',
    title: '10. Ctrl + Shift + L (เปิด/ปิด Filter)',
    subtitle: 'ใส่ปุ่มกรองข้อมูลที่หัวตาราง',
    detail: {
      lessonNo: 'คีย์ลัดที่ 10',
      title: 'คีย์ลัด Ctrl + Shift + L (ปุ่มกรองข้อมูล)',
      heroIcon: 'filter-outline',
      description:
        'เปิดหรือปิดลูกศรตัวกรอง (Filter) บนหัวคอลัมน์ เพื่อใช้เรียงลำดับข้อมูล (Sort) หรือคัดกรองเฉพาะข้อมูลที่สนใจ',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'คลิกที่หัวตาราง แล้วกด Ctrl + Shift + L พร้อมกัน',
        'กดซ้ำอีกครั้งเพื่อยกเลิกตัวกรองทั้งหมด',
      ],
    },
  },
  {
    id: 11,
    icon: 'checkbox-outline',
    title: '11. Ctrl + A (เลือกทั้งหมด / Select All)',
    subtitle: 'คลุมดำเลือกข้อมูลทั้งหมดในตาราง',
    detail: {
      lessonNo: 'คีย์ลัดที่ 11',
      title: 'คีย์ลัด Ctrl + A (เลือกทั้งหมด)',
      heroIcon: 'checkbox-outline',
      description:
        'ใช้เลือกข้อมูลทั้งหมดในกลุ่มตารางทันที โดยไม่ต้องลากเมาส์คลุมดำเองให้เสียเวลา',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + A เมื่ออยู่ในตารางเพื่อคลุมดำเฉพาะตารางนั้น',
        'กด Ctrl + A ซ้ำอีกครั้งเพื่อเลือกเซลล์ทั้งแผ่นงาน (Sheet)',
      ],
    },
  },
  {
    id: 12,
    icon: 'print-outline',
    title: '12. Ctrl + P (พิมพ์เอกสาร / Print)',
    subtitle: 'เปิดหน้าต่างตั้งค่าพิมพ์งาน',
    detail: {
      lessonNo: 'คีย์ลัดที่ 12',
      title: 'คีย์ลัด Ctrl + P (พิมพ์เอกสาร)',
      heroIcon: 'print-outline',
      description:
        'เปิดหน้าต่างตัวอย่างก่อนพิมพ์ (Print Preview) เพื่อตรวจสอบความถูกต้อง จัดหน้ากระดาษ ก่อนส่งพิมพ์ออกทางเครื่องพิมพ์',
      highlightTitle: 'เทคนิคการใช้งาน',
      highlightIcon: 'bulb-outline',
      highlights: [
        'กด Ctrl + P เพื่อดูตัวอย่างหน้ากระดาษก่อนพิมพ์',
        'สามารถปรับแนวตั้ง-แนวนอน และขนาดสเกลได้จากหน้านี้',
      ],
    },
  },
];

export default function ShortcutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.appTitle}>คีย์ลัด Excel</Text>
            <Text style={styles.appSubtitle}>Keyboard Shortcuts</Text>
            <Text style={styles.appDesc}>
              รวม 12 คีย์ลัดยอดฮิต ช่วยให้ทำงานเร็วขึ้น 10 เท่า ทำงานประหยัดเวลา ไม่ต้องพึ่งเมาส์
            </Text>
          </View>
          <View style={styles.logoBadge}>
            <Ionicons name="flash-outline" size={28} color="#FFFFFF" />
          </View>
        </View>

        {/* รายการคีย์ลัด */}
        <View style={styles.listContainer}>
          {shortcuts.map((item) => (
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