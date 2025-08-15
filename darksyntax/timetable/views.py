from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from .models import Timetable
from .serializers import TimetableSerializer

# timetable event

class CreateTimetableAPIView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = TimetableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#  all timetable events
class TimetableListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        events = Timetable.objects.all().order_by('event_date', 'start_time')
        serializer = TimetableSerializer(events, many=True)
        return Response(serializer.data)
