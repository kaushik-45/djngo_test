from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.http import Http404

from .models import Movie
from .serializers import MovieSerializer

class MovieAddView(APIView):
    def post(self,request):
        movieData = MovieSerializer(data = request.data)
        if movieData.is_valid():
            movieData.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(movieData.errors,status=status.HTTP_400_BAD_REQUEST)
    
class MovieListView(APIView):
    def get(self,request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies,many=True) 
        return Response(serializer.data,status=status.HTTP_200_OK)   
    

class MovieById(APIView):
    def get(self,request,id):
        try:
            movie = Movie.objects.get(pk=id)
        except Movie.DoesNotExist:
            raise Http404     

        serilalizer = MovieSerializer(movie)
        return Response(serilalizer.data,status=status.HTTP_200_OK)