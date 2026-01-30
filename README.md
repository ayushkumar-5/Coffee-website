# ☕ Coffee Can - Drink the Drama

A stunning, cinematic coffee website featuring advanced scroll animations, 3D interactions, and particle effects. Built with Next.js and GSAP for a premium user experience.

![Coffee Can](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055?style=for-the-badge)

## ✨ Features

### 🎬 **Cinematic Scroll Experience**
- **192-frame scroll animation** - Smooth canvas-based animation sequence
- **GSAP-powered transitions** - Buttery smooth scroll-driven animations
- **Dynamic text overlays** - Story-driven content that appears at precise scroll positions

### 🎨 **Interactive 3D Gallery**
- **Fibonacci Sphere Grid** - 20 images arranged in a mathematically perfect sphere
- **Drag-to-rotate physics** - Intuitive mouse/touch controls with momentum
- **Auto-rotation mode** - Mesmerizing continuous rotation
- **Modal image viewing** - Enlarged view with smooth transitions

### 📸 **Polaroid Collection**
- **16 circular polaroids** - Arranged in a perfect circle around the 3D sphere
- **Random rotations** - Natural, scattered aesthetic
- **Hover animations** - Scale and straighten on interaction
- **Framer Motion powered** - Smooth spring animations

### 💬 **Testimonials Carousel**
- **Infinite scroll animation** - Seamless looping testimonials
- **Dual-column layout** - Different scroll speeds for depth
- **Gradient masks** - Elegant fade-in/fade-out effects
- **Responsive cards** - Beautiful on all screen sizes

### ⚡ **Vaporize Text Animation**
- **Particle-based text** - Custom canvas rendering
- **Text cycling** - Smooth transitions between phrases
- **Wave vaporization** - Left-to-right particle dissolution
- **Performance optimized** - Intersection observer for efficient rendering

### 💳 **Payment Section**
- **Floating payment badges** - Visa, Mastercard, Apple Pay, PayPal, Google Pay, Amex
- **Handwritten notes** - Authentic "Next Day Delivery" and shipping info
- **Spring animations** - Bouncy, delightful interactions
- **Decorative circles** - Subtle background elements

## 🎨 Design System

### **Color Palette**
```css
--background: #0B0B0C (Deep Black)
--foreground: #F5F5F5 (Off White)
--copper-500: #CD7F32
--copper-400: #E5A05D
--copper-300: #F4C088
--gold-500: #FFD700
--gold-400: #FFED4E
```

### **Typography**
- **Primary Font**: Inter (Sans-serif)
- **Handwriting Font**: Caveat (Cursive)
- **Font Weights**: 400, 500, 600, 700

### **Theme**
- Dark, cinematic aesthetic with copper/gold accents
- Consistent gradient usage for premium feel
- Subtle glow effects for depth
- Glassmorphism touches

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd gsap
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
gsap/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main homepage
├── components/
│   ├── CanvasScroll.tsx      # 192-frame scroll animation
│   ├── CTASection.tsx        # Call-to-action with vaporize text
│   ├── Navbar.tsx            # Navigation bar
│   ├── PaymentSection.tsx    # Payment methods display
│   ├── PolaroidGallery.tsx   # Circular polaroid + 3D sphere
│   ├── ScrollTextSection.tsx # Scroll-triggered text overlays
│   ├── SphereImageGrid.tsx   # 3D Fibonacci sphere component
│   ├── Testimonials.tsx      # Testimonials section
│   ├── TestimonialsColumn.tsx# Individual testimonial column
│   └── VaporizeTextCycle.tsx # Particle text animation
├── public/
│   ├── frames/               # 192 JPG frames for scroll animation
│   ├── images/               # Coffee and avatar images
│   └── payment/              # Payment logos and favicon
└── tailwind.config.ts        # Tailwind configuration
```

## 🛠️ Technologies Used

### **Core Framework**
- **Next.js 14.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### **Animation Libraries**
- **GSAP (GreenSock)** - Professional-grade animation
- **Framer Motion 11** - React animation library
- **Canvas API** - Custom particle effects

### **Styling**
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **CSS Custom Properties** - Theme variables
- **Google Fonts** - Inter & Caveat

### **Image Optimization**
- **Next.js Image** - Automatic image optimization
- **WebP/JPG formats** - Optimized for web

## 🎯 Key Components

### **CanvasScroll**
Renders 192 pre-rendered frames in sequence based on scroll position using GSAP ScrollTrigger.

### **SphereImageGrid**
Interactive 3D sphere using:
- Fibonacci sphere distribution algorithm
- Mouse/touch drag physics
- Rotation matrices for 3D transformation
- Canvas rendering for performance

### **VaporizeTextCycle**
Advanced particle system:
- Text-to-particle conversion
- Wave-based vaporization
- Smooth fade-in/out transitions
- Intersection observer optimization

### **PolaroidGallery**
Combines static polaroids with interactive 3D sphere in a centered composition.

## 🎨 Customization

### **Change Color Theme**
Edit `tailwind.config.ts`:
```typescript
colors: {
  copper: {
    500: '#CD7F32', // Your color
  },
  gold: {
    500: '#FFD700', // Your color
  }
}
```

### **Adjust Animation Speed**
In components:
```typescript
animation={{
  vaporizeDuration: 2,    // Adjust timing
  fadeInDuration: 1.2,
  waitDuration: 1
}}
```

### **Change Number of Frames**
Update `CanvasScroll`:
```tsx
<CanvasScroll frameCount={192} scrollHeight="h-[600vh]" />
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Support**: All interactions work on touch devices
- **Adaptive Layouts**: Components adjust to screen size

## ⚡ Performance Optimizations

- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Next.js automatic optimization
- **Intersection Observer**: Animations trigger only in viewport
- **Canvas Efficiency**: Particle systems use requestAnimationFrame
- **Code Splitting**: Automatic route-based splitting

## 🐛 Known Issues

- Webpack caching warnings during development (doesn't affect functionality)
- Heavy animation may impact lower-end devices

## 🔮 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product detail pages
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Implement coffee brewing guides
- [ ] Add blog section
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own projects!

## 👨‍💻 Author

Built with ☕ and code

## 🙏 Acknowledgments

- GSAP for incredible animation tools
- Framer Motion for smooth React animations
- Next.js team for an amazing framework
- Coffee for the inspiration ☕

---

### 💡 Tips for Best Experience

1. **Use Chrome or Safari** for best performance
2. **Enable JavaScript** for full functionality
3. **Use a mouse** for optimal 3D sphere interaction
4. **Scroll slowly** to enjoy the animations

### 🚀 Deploy

Ready to deploy? Try:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

---

**⭐ Star this repo if you found it helpful!**
