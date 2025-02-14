from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(["GET"])
def hello_world(request):
    return Response(
        {
            "message": "Django and Next.js, nice to meet you",
        }
    )
