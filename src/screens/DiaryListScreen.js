import React from 'react'; 
import { 
  Text, 
  StyleSheet, 
  ScrollView, 
} from 'react-native'; 
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [ 
  { 
    id: 1, 
    title: 'ketua umum imm pembaharu saintek', 
    date: '2025-10-06', 
    preview: 'sebagai ketua umum saya harus selalu mengingatkan kader untuk terus bersinergi dalam negri...', 
    moodUri: 'https://picsum.photos/seed/happy/80', 
  }, 
  { 
    id: 2, 
    title: 'Produktif di Kampus', 
    date: '2025-10-05', 
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...', 
    moodUri: 'https://picsum.photos/seed/focus/80', 
  }, 
  { 
    id: 3, 
    title: 'Aktifitas ketua', 
    date: '2025-10-04', 
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...', 
    moodUri: 'https://picsum.photos/seed/calm/80', 
  }, 
]; 

export default function DiaryListScreen() { 
  return ( 
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content} 
    > 
      <Text style={styles.header}>Buku Harian</Text> 

      {diaryEntries.map((entry) => ( 
        <DiaryCard 
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
        />
      ))} 
    </ScrollView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#ffffff', 
  }, 
  content: { 
    padding: 16, 
  }, 
  header: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 12, 
  }, 
});