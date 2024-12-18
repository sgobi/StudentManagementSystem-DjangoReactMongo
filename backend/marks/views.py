from rest_framework.views import APIView
from django.http.response import JsonResponse
from .models import Marks
from .serializer import MarksSerializer
from django.http.response import Http404
from rest_framework.response import Response


# Create your views here.
class MarksView(APIView):

    def get_marks(self, pk):
        try:
            marks = Marks.objects.get(marksId=pk)
            return marks
        except:
            return JsonResponse("Marks Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_marks(pk)
            serializer = MarksSerializer(data)
        else:
            data = Marks.objects.all()
            serializer = MarksSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = MarksSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Marks Created Successfully", safe=False)
        return JsonResponse("Failed to Add Marks", safe=False)
    
    def delete(self, request, pk=None):
        marks_to_delete = Marks.objects.get(marksId=pk)
        marks_to_delete.delete()
        return JsonResponse("Marks Deleted Successfully", safe=False)