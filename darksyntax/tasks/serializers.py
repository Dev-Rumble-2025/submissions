from rest_framework import serializers
from .models import Task, Submission

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'task_file', 'due_date']

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['id', 'task', 'submission_file']

    def create(self, validated_data):
        user = self.context['request'].user
        return Submission.objects.create(submitted_by=user, **validated_data)
