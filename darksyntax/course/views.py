from django.shortcuts import render

# Create your views here.
# course/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Course
from .serializers import CourseSerializer

class CourseListView(APIView):
    def get(self, request):
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# course/views.py
from .models import Subject
from .serializers import SubjectSerializer

class SubjectListView(APIView):
    def get(self, request, course_id):
        subjects = Subject.objects.filter(course_id=course_id)
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# course/views.py
from .models import PDF
from .serializers import PDFSerializer

class PDFListView(APIView):
    def get(self, request, subject_id):
        pdfs = PDF.objects.filter(subject_id=subject_id)
        serializer = PDFSerializer(pdfs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
