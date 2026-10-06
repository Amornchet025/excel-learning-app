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

export default function DetailScreen({ route, navigation }) {
  const {
    lessonNo = 'บทเรียน',
    title = 'หัวข้อบทเรียน',
    heroIcon = 'grid-outline',
    description = '',
    highlightTitle = 'ประเด็นสำคัญ',
    highlightIcon = 'bulb-outline',
    highlights = [],
  } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header Bar */}
      <View style={styles.navHeader}>
        <TouchableOpacity style={styles.backIconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#475569" />
        </TouchableOpacity>
        <Text style={styles.navHeaderTitle} numberOfLines={1}>{lessonNo}</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* การ์ด Banner ด้านบน */}
        <View style={styles.heroCard}>
          <View style={styles.heroGraphicBox}>
            <Ionicons name={heroIcon} size={64} color="#107C41" />
          </View>
        </View>

        {/* เนื้อหาหลัก */}
        <Text style={styles.mainTitle}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>

        {/* กล่องสรุปเทคนิค / ขั้นตอนง่ายๆ (Highlight Box) */}
        {highlights && highlights.length > 0 && (
          <View style={styles.highlightCard}>
            <View style={styles.highlightHeader}>
              <Ionicons name={highlightIcon} size={20} color="#107C41" />
              <Text style={styles.highlightTitle}>{highlightTitle}</Text>
            </View>

            {highlights.map((item, index) => (
              <View key={index} style={styles.bulletRow}>
                <Ionicons name="checkmark" size={16} color="#107C41" style={styles.bulletIcon} />
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ปุ่มกลับไปยังหน้าหลัก */}
        <TouchableOpacity
          style={styles.bottomBackButton}
          activeOpacity={0.8}
          onPress={() => navigation.popToTop()}
        >
          <Ionicons name="arrow-back-outline" size={18} color="#107C41" />
          <Text style={styles.bottomBackText}>กลับไปยังหน้าหลัก</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8F5',
  },
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backIconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navHeaderTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  scrollContent: {
    padding: 20,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  heroGraphicBox: {
    width: 120,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#E6F4EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 20,
  },
  highlightCard: {
    backgroundColor: '#E6F4EA', // สีเขียวอ่อนมินต์โปร่งตา
    borderRadius: 18,
    padding: 18,
    marginBottom: 28,
  },
  highlightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  highlightTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#107C41',
    marginLeft: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  bulletIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 13,
    color: '#1E293B',
    flex: 1,
    lineHeight: 20,
  },
  bottomBackButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 20,
  },
  bottomBackText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#107C41',
    marginLeft: 6,
  },
});