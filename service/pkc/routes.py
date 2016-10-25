@socketio.on('connect')
def handle_connection():
    emit('Client connected')
