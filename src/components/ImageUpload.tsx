
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedIngredients, setDetectedIngredients] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      
      // Simulate AI processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setDetectedIngredients(['Tomatoes', 'Lettuce', 'Onions', 'Carrots', 'Bell Peppers']);
      }, 3000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  });

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Upload Your Fridge Photo
          </h2>
          <p className="text-lg text-gray-600">
            Let our AI identify your ingredients and suggest amazing recipes
          </p>
        </div>

        <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          <div
            {...getRootProps()}
            className={`relative border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
              isDragActive 
                ? 'border-emerald-500 bg-emerald-50/50' 
                : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50/30'
            }`}
          >
            <input {...getInputProps()} />
            
            {uploadedImage ? (
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded ingredients" 
                    className="max-w-full max-h-96 mx-auto rounded-xl shadow-lg"
                  />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
                        <p className="text-lg font-semibold">Analyzing ingredients...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {detectedIngredients.length > 0 && (
                  <div className="text-left">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">Detected Ingredients:</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {detectedIngredients.map((ingredient, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Generate Recipes
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                  <Upload className="relative w-20 h-20 text-emerald-600 mx-auto" />
                </div>
                
                <div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    {isDragActive ? 'Drop your image here!' : 'Drag & drop your fridge photo'}
                  </p>
                  <p className="text-gray-500">or click to browse files</p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline"
                    className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-xl"
                  >
                    <ImageIcon className="mr-2 w-5 h-5" />
                    Choose File
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ImageUpload;
