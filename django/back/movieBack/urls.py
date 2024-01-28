from django.urls import path
from . import apiviews

urlpatterns=[
     
     path("add_movie/",apiviews.MovieAddView.as_view(),name = "MovieAddView"),
     path("get_movies/",apiviews.MovieListView.as_view(),name = "MovieListView"),
     path("movie/<int:id>/",apiviews.MovieById.as_view(), name= "MovieById"),
     
]



