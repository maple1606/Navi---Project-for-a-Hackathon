import numpy as np
import keras.backend as k
from keras.layers import Conv2D,MaxPooling2D,Flatten,Dense
from keras.models import Sequential,load_model
from keras.optimizers import Adam
from keras.preprocessing import image
import cv2
import datetime

#Buiding model 
model=Sequential()
model.add(Conv2D(32,(3,3),activation='relu',input_shape=(150,150,3)))
model.add(MaxPooling2D() )
model.add(Conv2D(32,(3,3),activation='relu'))
model.add(MaxPooling2D() )
model.add(Conv2D(32,(3,3),activation='relu'))
model.add(MaxPooling2D() )
model.add(Flatten())
model.add(Dense(100,activation='relu'))
model.add(Dense(1,activation='sigmoid'))
model.compile(optimizer="adam",loss='binary_crossentropy',metrics=['accuracy'])


from keras.preprocessing.image import ImageDataGenerator
train_loader = ImageDataGenerator(
        rescale=1./255, #scale lại 
        shear_range=0.2,  #Góc cắt
        zoom_range=0.2,   #Phạm vi phóng to
        horizontal_flip=True) #Lật ngang ảnh 

test_loader = ImageDataGenerator(rescale=1./255)

train_set = train_loader.flow_from_directory(
        r'F:\Face_detect\train',
        target_size=(150,150),
        batch_size=16 ,
        class_mode='binary')

test_set = test_loader.flow_from_directory(
        r'F:\Face_detect\test',
        target_size=(150,150),
        batch_size=16,
        class_mode='binary')

model_saved=model.fit_generator(train_set,epochs=20,validation_data=test_set,)

model.save('mymodel.h5',model_saved) 
