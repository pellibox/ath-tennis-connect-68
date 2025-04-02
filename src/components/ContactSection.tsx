
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from "sonner";
import PdfBrochureButton from './PdfBrochureButton';

interface ContactSectionProps {
  title: string;
  subtitle?: string;
  address: string;
  phone: string;
  email: string;
  className?: string;
}

const ContactSection = ({ 
  title, 
  subtitle, 
  address, 
  phone, 
  email,
  className 
}: ContactSectionProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission to info@ath.tennis
    console.log('Sending message to info@ath.tennis:', formData);
    
    // Simulate sending email
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      toast.success("Messaggio inviato con successo! Ti contatteremo presto.");
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };
  
  return (
    <section className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12 font-swiss">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid md:grid-cols-2 gap-12">
          <RevealAnimation direction="left">
            <div>
              <h3 className="text-xl font-medium mb-6">Invia un Messaggio</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-swiss">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black font-swiss"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-swiss">Indirizzo Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black font-swiss"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 font-swiss">Numero di Telefono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black font-swiss"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 font-swiss">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black font-swiss"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={cn(
                    "px-6 py-3 bg-black text-white text-sm transition-all w-full md:w-auto font-swiss",
                    formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                  )}
                >
                  {formStatus === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
                
                {formStatus === 'success' && (
                  <p className="mt-4 text-green-600 font-swiss">Il tuo messaggio è stato inviato con successo. Ti contatteremo presto!</p>
                )}
                
                {formStatus === 'error' && (
                  <p className="mt-4 text-red-600 font-swiss">Si è verificato un errore durante l'invio del messaggio. Riprova.</p>
                )}
              </form>

              {/* PDF Brochure Download Button */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h4 className="text-base font-medium mb-2">Scarica la brochure informativa</h4>
                <p className="text-sm text-gray-600 mb-4 font-swiss">
                  Scarica una copia completa di tutte le informazioni sui nostri servizi, programmi e prezzi.
                </p>
                <PdfBrochureButton />
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation direction="right">
            <div>
              <h3 className="text-xl font-medium mb-6">Informazioni di Contatto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 mt-1 text-gray-600" />
                  <div>
                    <h4 className="font-medium mb-1">Indirizzo</h4>
                    <p className="text-gray-600 font-swiss">{address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-4 mt-1 text-gray-600" />
                  <div>
                    <h4 className="font-medium mb-1">Telefono</h4>
                    <a href={`tel:${phone}`} className="text-gray-600 hover:underline font-swiss">{phone}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-4 mt-1 text-gray-600" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href={`mailto:${email}`} className="text-gray-600 hover:underline font-swiss">{email}</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-6">Orari di Apertura</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunedì - Venerdì</span>
                    <span className="text-gray-600 font-swiss">7:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sabato</span>
                    <span className="text-gray-600 font-swiss">8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domenica</span>
                    <span className="text-gray-600 font-swiss">9:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
