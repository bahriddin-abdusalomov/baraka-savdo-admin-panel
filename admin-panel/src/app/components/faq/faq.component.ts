import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs: Faq[] = [
    {
      question: 'Bozordagi savdo formati kimga mos keladi?',
      answer:
        "Bozorlarda sotish sotish uchun biror narsaga ega bo'lgan barcha odamlar uchun mos keladi: allaqachon oflayn biznesga ega bo'lganlar, allaqachon onlayn-do'konni boshqaradiganlar, lekin jarayonlarni soddalashtirish va etkazib berishni tezlashtirishni xohlaydiganlar. Bu, shuningdek, hali o'z biznesi yoki mahsulotiga ega bo'lmagan tashabbuskor odamlar uchun yaxshi boshlanishdir, lekin siz nimani sotmoqchi ekanligingizni bilasiz.",
    },
    {
      question: 'Sizning biznesingiz hozir bozorlarga kirishi kerakmi?',
      answer:
        "Ayni paytda bozorlar eng istiqbolli biznes modelidir. Keyingi 15 yil ichida bu muvaffaqiyatga erisha olmaydi. Faqat 2021 yil boshida bu bozor 44 foizga o'sdi.",
    },
    {
      question:
        "Klassik chakana yoki onlayn-do'konlar bilan solishtirganda ushbu sanoatning imkoniyatlari qanday?",
      answer:
        "Gap shundaki, bu sotuvchilar uchun ham, xaridorlar uchun ham foydalidir: bozor modeli barcha logistika muammolarini hal qiladi va sizning potentsial mijozlaringiz allaqachon ushbu platformada o'tirib, sizdan buyurtma berishingizni kutishmoqda.",
    },
    {
      question: 'Endi bozorda savdo qilishni boshlash juda kechmi?',
      answer:
        'Hozir bozorlarning gullagan davri. 2021 yilda onlayn savdo statistikasi 44 foizga oshdi. Ayni paytda gap nafaqat pandemiyada, balki odamlarning odatlari ham o‘zgarmoqda: biror narsaga buyurtma berish do‘konlarga borib, uni o‘zingiz sotib olishdan ko‘ra ancha foydali va tezroq. Bu vaqtni tejash va foydaliroq narsaga sarflash mumkin.',
    },
    // Add more FAQ items as needed
  ];

  toggleAnswer(faq: Faq): void {
    faq.showAnswer = !faq.showAnswer;
  }
}

interface Faq {
  question: string;
  answer: string;
  showAnswer?: boolean;
}
