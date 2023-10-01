import numpy as np
import keras.backend as k
from keras.layers import Conv2D,MaxPooling2D,Flatten,Dense
from keras.models import Sequential,load_model
from keras.optimizers import Adam
from keras.preprocessing import image
import cv2
import datetime
#To test for individual images

mymodel=load_model(r'F:\Face_detect\mymodel.h5')
test_image=image.load_img(r'F:\Face_detect\test\with_mask\1-with-mask.jpg',
                          target_size=(150,150,3))
test_image=image.img_to_array(test_image)
test_image=np.expand_dims(test_image,axis=0)
mymodel.predict(test_image)[0][0]

mymodel=load_model(r'F:\Face_detect\mymodel.h5')
cap=cv2.VideoCapture(0)
face_cascade=cv2.CascadeClassifier(r'F:\Face_detect\haarcascade_frontalface_default.xml')

while cap.isOpened():
    _,img=cap.read()
    face=face_cascade.detectMultiScale(img,scaleFactor=1.1,minNeighbors=4)
    for(x,y,w,h) in face:
        face_img = img[y:y+h, x:x+w]
        cv2.imwrite('temp.jpg',face_img)
        test_image=image.load_img('temp.jpg',target_size=(150,150,3))
        test_image=image.img_to_array(test_image)
        test_image=np.expand_dims(test_image,axis=0)
        pred=mymodel.predict(test_image)[0][0]
        if pred==1:
            cv2.rectangle(img,(x,y),(x+w,y+h),(0,0,255),3)
            cv2.putText(img,'WARNING',((x+w)//2,y+h+20),cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,255),3)
        else:
            cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),3)
            cv2.putText(img,'OK',((x+w)//2,y+h+20),cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),3)
        dtime=str(datetime.datetime.now())
        cv2.putText(img,dtime,(400,450),cv2.FONT_HERSHEY_SIMPLEX,0.5,(255,255,255),1)
          
    cv2.imshow('Check',img)
    
    if cv2.waitKey(1)==ord('o'):
        break
    
cap.release()
cv2.destroyAllWindows()
